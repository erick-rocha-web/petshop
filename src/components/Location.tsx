/**
 * Localizacao (SDD 3.5).
 *
 * Cartao de endereco com acabamento visual e link externo para o perfil real do
 * Maps. Sem mapa incorporado: nao ha embed oficial validado, e o SDD proibe
 * inventar coordenadas, chave de API ou imagem que simule uma rota.
 *
 * Nao existe tabela de horarios aqui porque a empresa so confirmou
 * "atendimento com horário agendado".
 */
import { business } from '../data/business';
import { telLink, whatsappLink } from '../lib/contact';
import { CalendarIcon, ExternalIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from './Icons';
import './location.css';

export function Location() {
  return (
    <>
      <div className="section__head">
        <span className="section__eyebrow">Localização</span>
        <h2 className="section__title">Estamos em {business.cityShort}.</h2>
        <p className="section__text">
          Endereço e contato direto com a equipe. O horário é combinado antes da visita.
        </p>
      </div>

      <div className="location">
        <div className="location__card">
          <span className="location__badge">
            <MapPinIcon className="location__badge-icon" />
          </span>
          <h3 className="location__title">Endereço</h3>
          <address className="location__address">
            {business.address.line1}
            <br />
            {business.address.line2}
            <br />
            CEP {business.address.zip}
          </address>
          <a
            className="btn btn--primary location__cta"
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver localização no Google Maps
            <ExternalIcon className="btn__icon" />
          </a>
        </div>

        <div className="location__card">
          <span className="location__badge">
            <CalendarIcon className="location__badge-icon" />
          </span>
          <h3 className="location__title">Horários e contato</h3>
          <p className="location__text">
            {business.scheduling}. {business.schedulingNote}
          </p>

          <ul className="location__contacts">
            <li>
              <a className="location__link" href={telLink()}>
                <PhoneIcon className="location__link-icon" />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="location__link"
                href={whatsappLink('geral')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="location__link-icon" />
                Falar no WhatsApp
              </a>
            </li>
          </ul>

          <p className="note location__note">
            Os horários de cada dia da semana ainda não foram informados pela empresa.
          </p>
        </div>
      </div>
    </>
  );
}
