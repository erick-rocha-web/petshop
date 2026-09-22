/**
 * Localizacao.
 *
 * Cartao de endereco com acabamento visual e link externo para a busca da loja
 * no Google Maps, montada a partir do nome e do endereco em `mapsLink()`. Sem
 * mapa incorporado: nao ha embed validado, e nao inventamos Place ID,
 * coordenadas ou imagem que simule uma rota.
 *
 * Nao existe tabela de horarios aqui porque a empresa nao informou a grade da
 * semana. "Fecha as 19h" no Maps e um estado momentaneo, nao uma grade.
 */
import { business } from '../data/business';
import { mapsLink, telLink, whatsappLink } from '../lib/contact';
import { CalendarIcon, ExternalIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from './Icons';
import './location.css';

export function Location() {
  return (
    <>
      <div className="section__head">
        <span className="section__eyebrow">Localização</span>
        <h2 className="section__title">Estamos no {business.cityShort}.</h2>
        <p className="section__text">
          Endereço completo da loja e contato direto com a equipe.
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
            href={mapsLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir no Google Maps
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
            Os horários de cada dia da semana ainda não foram informados pela loja.
          </p>
        </div>
      </div>
    </>
  );
}
