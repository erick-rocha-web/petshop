/**
 * Geracao centralizada dos links externos da pagina.
 *
 * TODOS os links de WhatsApp passam por `whatsappLink`, e o numero vive em um
 * unico lugar (`business.whatsappNumber`). Trocar o numero ali troca em todos os
 * botoes — cabecalho, cartoes, contato, rodape e barra do celular.
 *
 * O site apenas PREPARA a mensagem. A navegacao acontece so depois de um clique
 * explicito da pessoa, e o envio acontece dentro do WhatsApp. Abrir o WhatsApp
 * nao reserva horario nenhum.
 */
import { business, whatsappMessages, type IntentId } from '../data/business';

const WA_BASE = 'https://wa.me/';
/** Formato publico e documentado de busca do Google Maps: nao exige Place ID nem coordenadas. */
const MAPS_BASE = 'https://www.google.com/maps/search/?api=1&query=';

/**
 * Link do WhatsApp para uma mensagem qualquer, sempre codificada com
 * `encodeURIComponent` — e o que impede acento e pontuacao de chegarem quebrados.
 */
export function whatsappLinkFor(message: string): string {
  return `${WA_BASE}${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Link do WhatsApp com a mensagem do assunto informado. */
export function whatsappLink(intent: IntentId): string {
  return whatsappLinkFor(whatsappMessages[intent]);
}

/** Texto exato que sera aberto no WhatsApp para o assunto informado. */
export function whatsappMessage(intent: IntentId): string {
  return whatsappMessages[intent];
}

/** Link `tel:` a partir do mesmo numero centralizado. */
export function telLink(): string {
  return `tel:+${business.whatsappNumber}`;
}

/**
 * Busca da loja no Google Maps, montada a partir do nome e do endereco.
 * Serve tanto para "Como chegar" quanto para consultar as avaliacoes, que ficam
 * na propria ficha do Maps. Nenhum numero de avaliacao e copiado para a pagina.
 */
export function mapsLink(): string {
  return `${MAPS_BASE}${encodeURIComponent(business.mapsQuery)}`;
}
