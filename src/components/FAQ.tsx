/**
 * Perguntas frequentes (SDD 3.6, RF-05).
 *
 * Usa `<details>/<summary>` nativos: teclado, estado de expansao e leitores de
 * tela funcionam sem JavaScript, que e o controle "nativo suficiente" pedido
 * pelo SDD. A animacao e curta e o conteudo continua acessivel sem ela.
 *
 * Nenhuma pergunta trata de urgencia, diagnostico ou prescricao: a pagina nao
 * presta orientacao clinica.
 */
import { faq } from '../data/business';
import { whatsappLink } from '../lib/contact';
import { WhatsAppIcon } from './Icons';
import './faq.css';

export function FAQ() {
  return (
    <div className="faq-layout">
      <div className="faq-layout__head">
        <span className="section__eyebrow">Dúvidas</span>
        <h2 className="section__title">Perguntas frequentes</h2>
        <p className="section__text">
          Não encontrou o que procurava? A equipe responde pelo WhatsApp.
        </p>
        <a
          className="btn btn--secondary faq-layout__cta"
          href={whatsappLink('geral')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="btn__icon" />
          Falar no WhatsApp
        </a>
      </div>

      <ul className="faq">
        {faq.map((item) => (
          <li key={item.question}>
            <details className="faq__item">
              <summary className="faq__question">
                <span>{item.question}</span>
                <span className="faq__marker" aria-hidden="true" />
              </summary>
              <p className="faq__answer">{item.answer}</p>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
