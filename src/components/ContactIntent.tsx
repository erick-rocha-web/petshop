/**
 * "Vamos conversar?" — escolha do assunto do contato (RF-02).
 *
 * Trocar o assunto NAO abre o WhatsApp, nao envia nada e nao exibe sucesso
 * falso: apenas atualiza a previa da mensagem. A navegacao para o WhatsApp so
 * acontece no clique explicito em "Continuar no WhatsApp".
 *
 * A selecao e comunicada por `aria-pressed` e tambem visualmente por borda,
 * fundo e marca de selecao — nunca apenas por cor.
 */
import { forwardRef } from 'react';
import type { IntentId } from '../data/business';
import { business, intentLabels } from '../data/business';
import { whatsappLink, whatsappMessage } from '../lib/contact';
import { WhatsAppIcon } from './Icons';
import './contact-intent.css';

const OPTIONS = Object.entries(intentLabels) as Array<[IntentId, string]>;

type ContactIntentProps = {
  selected: IntentId;
  onSelect: (intent: IntentId) => void;
};

export const ContactIntent = forwardRef<HTMLDivElement, ContactIntentProps>(
  function ContactIntent({ selected, onSelect }, ref) {
    return (
      <div className="intent" ref={ref} id="contato">
        <div className="intent__head">
          <h3 className="intent__title">Vamos conversar?</h3>
          <p className="intent__text">
            Escolha o assunto. A mensagem é preparada aqui e enviada por você no WhatsApp.
          </p>
        </div>

        <div className="intent__options" role="group" aria-label="Assunto do contato">
          {OPTIONS.map(([id, label]) => (
            <button
              key={id}
              type="button"
              className="intent__option"
              aria-pressed={selected === id}
              onClick={() => onSelect(id)}
            >
              <span className="intent__option-mark" aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>

        <div className="intent__preview">
          <p className="intent__preview-label" id="intent-preview-label">
            Mensagem que será preparada
          </p>
          <p className="intent__preview-text" aria-live="polite" aria-labelledby="intent-preview-label">
            “{whatsappMessage(selected)}”
          </p>
        </div>

        <div className="intent__actions">
          <a
            className="btn btn--primary intent__cta"
            href={whatsappLink(selected)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="btn__icon" />
            Continuar no WhatsApp
          </a>
          <p className="intent__disclaimer">
            Nada é enviado automaticamente e nenhum horário fica reservado por aqui. O WhatsApp abre
            com o texto pronto para você revisar, e a equipe confirma a disponibilidade pelo número{' '}
            {business.phoneDisplay}.
          </p>
        </div>
      </div>
    );
  },
);
