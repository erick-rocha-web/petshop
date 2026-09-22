/**
 * Geracao centralizada dos links de WhatsApp.
 *
 * TODOS os links da pagina passam por `whatsappLink`. O numero vive em um unico
 * lugar (`business.whatsappNumber`), o que evita a confusao entre telefone
 * comercial e WhatsApp que ja aconteceu na prospeccao anterior.
 *
 * O site apenas PREPARA a mensagem. A navegacao acontece so depois de um clique
 * explicito da pessoa, e o envio acontece dentro do WhatsApp.
 */
import { business, whatsappMessages, type IntentId } from '../data/business';

const WA_BASE = 'https://wa.me/';

/** Link do WhatsApp com a mensagem do assunto informado, codificada para URL. */
export function whatsappLink(intent: IntentId): string {
  return `${WA_BASE}${business.whatsappNumber}?text=${encodeURIComponent(whatsappMessages[intent])}`;
}

/** Texto exato que sera aberto no WhatsApp para o assunto informado. */
export function whatsappMessage(intent: IntentId): string {
  return whatsappMessages[intent];
}

/** Link `tel:` a partir do mesmo numero centralizado. */
export function telLink(): string {
  return `tel:+${business.whatsappNumber}`;
}
