/**
 * Abertura da pagina (SDD 3.2).
 *
 * A altura vem do conteudo, nunca de `100vh`. No desktop sao duas colunas; no
 * celular o titulo, o texto e os CTAs aparecem antes da imagem.
 *
 * A composicao e ilustrativa e esta identificada como tal: nenhum animal aqui e
 * apresentado como paciente da empresa.
 */
import { business, heroImage, preview } from '../data/business';
import { whatsappLink } from '../lib/contact';
import { Figure } from './Figure';
import { ArrowDownIcon, CalendarIcon, MapPinIcon, WhatsAppIcon } from './Icons';
import './hero.css';

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Atendimento veterinário, estética e Pet Store em {business.cityShort}.
          </p>

          <h1 className="hero__title">
            Cuidado para o seu pet, <span className="hero__title-accent">perto de você.</span>
          </h1>

          <p className="hero__lead">
            Consultas, vacinas, exames e cuidados estéticos, com atendimento por horário agendado na{' '}
            {business.name}.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={whatsappLink('horario')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="btn__icon" />
              Solicitar um horário
            </a>
            <a className="btn btn--secondary" href="#servicos">
              Conhecer os serviços
              <ArrowDownIcon className="btn__icon" />
            </a>
          </div>

          <ul className="hero__meta">
            <li className="hero__meta-item">
              <MapPinIcon className="hero__meta-icon" />
              {business.city}
            </li>
            <li className="hero__meta-item">
              <CalendarIcon className="hero__meta-icon" />
              {business.scheduling}
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
