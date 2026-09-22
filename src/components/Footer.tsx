/**
 * Rodape.
 *
 * Nome, endereco completo e telefone da Animalandia, mais a identificacao da
 * demonstracao e a autoria da proposta. Nao afirma "site oficial", nao exibe
 * contratacao e nao inclui icone de rede social sem URL confirmada nem pagina de
 * privacidade ficticia.
 */
import { business, preview } from '../data/business';
import { mapsLink, telLink } from '../lib/contact';
import { ExternalIcon } from './Icons';
import './footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{business.name}</p>
          <p className="footer__desc">{business.shortDescription}</p>
        </div>

        <ul className="footer__contacts">
          <li>
            <address className="footer__address">
              {business.address.line1}
              <br />
              {business.address.line2} · CEP {business.address.zip}
            </address>
          </li>
          <li>
            <a className="footer__link" href={telLink()}>
              {business.phoneDisplay}
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href={mapsLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no Google Maps
              <ExternalIcon className="footer__link-icon" />
            </a>
          </li>
        </ul>

        <div className="footer__preview">
          <p className="footer__preview-badge">{preview.badge}</p>
          <p className="footer__preview-note">
            {preview.author}. {preview.imageNote}, usadas apenas nesta demonstração.
          </p>
        </div>
      </div>
    </footer>
  );
}
