/**
 * Acesso rapido ao contato no celular (RF-04).
 *
 * Um unico controle, sem concorrer com outros botoes flutuantes. Respeita a
 * area segura inferior e o `body` reserva espaco equivalente no fim da pagina,
 * entao a barra nunca cobre conteudo (AC-12).
 *
 * No desktop ela desaparece: ali o contato fica no cabecalho.
 */
import { business } from '../data/business';
import { whatsappLink } from '../lib/contact';
import { WhatsAppIcon } from './Icons';
import './mobile-contact-bar.css';

export function MobileContactBar() {
  return (
    <div className="mobile-bar">
      <p className="mobile-bar__label">{business.scheduling}</p>
      <a
        className="btn btn--primary mobile-bar__cta"
        href={whatsappLink('geral')}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon className="btn__icon" />
        Falar no WhatsApp
      </a>
    </div>
  );
}
