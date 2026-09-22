/**
 * Acesso rapido ao contato no celular.
 *
 * Um unico controle, sem concorrer com outros botoes flutuantes. Respeita a
 * area segura inferior e o `body` reserva espaco equivalente no fim da pagina,
 * entao a barra nunca cobre conteudo.
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
      <p className="mobile-bar__label">Banho e tosa no {business.cityShort}</p>
      <a
        className="btn btn--primary mobile-bar__cta"
        href={whatsappLink('banho')}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon className="btn__icon" />
        Consultar horários
      </a>
    </div>
  );
}
