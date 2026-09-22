/**
 * Abertura da pagina.
 *
 * A altura vem do conteudo, nunca de `100vh`. No desktop sao duas colunas; no
 * celular o titulo, o texto e os CTAs aparecem antes da imagem.
 *
 * O CTA principal leva ao WhatsApp para CONSULTAR horarios — a nota logo abaixo
 * deixa claro que abrir a conversa nao reserva nada. O secundario abre o
 * endereco no Google Maps.
 *
 * A composicao e ilustrativa e esta identificada como tal: nenhum animal aqui e
 * apresentado como cliente da loja.
 */
import { business, heroImage, preview } from '../data/business';
import { mapsLink, whatsappLink } from '../lib/contact';
import { Figure } from './Figure';
import { CarIcon, MapPinIcon, WhatsAppIcon } from './Icons';
import './hero.css';

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Pet shop no {business.city}.</p>

          <h1 className="hero__title">
            Banho e tosa <span className="hero__title-accent">no {business.cityShort}.</span>
          </h1>

          <p className="hero__lead">
            Conheça a {business.name}: banho e tosa, além de rações, brinquedos, acessórios e outros
            itens para o seu pet. Converse com a equipe para consultar os horários e a
            disponibilidade.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={whatsappLink('banho')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="btn__icon" />
              Consultar horários no WhatsApp
            </a>
            <a
              className="btn btn--secondary"
              href={mapsLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPinIcon className="btn__icon" />
              Como chegar
            </a>
          </div>

          <p className="hero__note">
            A conversa começa no WhatsApp: a equipe informa os horários disponíveis. Nada é
            reservado por aqui.
          </p>

          <ul className="hero__meta">
            <li className="hero__meta-item">
              <MapPinIcon className="hero__meta-icon" />
              {business.address.line1}
            </li>
            <li className="hero__meta-item">
              <CarIcon className="hero__meta-icon" />
              Estacionamento gratuito no local
            </li>
          </ul>
        </div>

        <div className="hero__media">
          <div className="hero__media-frame">
            <span className="hero__blob" aria-hidden="true" />
            <span className="hero__arc" aria-hidden="true" />
            <Figure
              className="hero__figure"
              src={heroImage.src}
              srcSet={heroImage.srcSet}
              sizes="(min-width: 900px) 520px, 100vw"
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              priority
            />
          </div>
          <p className="hero__caption">{preview.imageNote}</p>
        </div>
      </div>
    </section>
  );
}
