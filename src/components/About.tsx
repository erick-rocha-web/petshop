/**
 * "Conheça a Essência Animal Vet" (SDD 3.4).
 *
 * Apenas informacoes confirmadas: horario agendado, tres areas de servico e
 * localizacao. Sem depoimentos, nomes de clientes ou historias clinicas.
 *
 * FOTOS REAIS: se a empresa autorizar ate tres fotos, basta preenche-las em
 * `business.realPhotos` que a galeria substitui a composicao ilustrativa. Sem
 * fotos, a secao entrega texto + icones + composicao acabada (nunca "em breve").
 */
import { business } from '../data/business';
import { Figure } from './Figure';
import { CalendarIcon, MapPinIcon, ScissorsIcon, StarIcon, StethoscopeIcon, StoreIcon } from './Icons';
import './about.css';

const AREAS = [
  { Icon: StethoscopeIcon, label: 'Clínica veterinária', detail: 'Consultas, vacinas e exames' },
  { Icon: ScissorsIcon, label: 'Centro de estética', detail: 'Banho e tosa' },
  { Icon: StoreIcon, label: 'Pet Store', detail: 'Produtos e medicamentos' },
];

const CONFIRMED = [
  { Icon: CalendarIcon, text: 'Atendimento com horário agendado, combinado pelo WhatsApp.' },
  { Icon: StethoscopeIcon, text: 'Três áreas de serviço reunidas no mesmo endereço.' },
  { Icon: MapPinIcon, text: `Localização em ${business.city}.` },
];

export function About() {
  const photos = business.realPhotos;

  return (
    <>
      <div className="about">
        <div className="about__content">
          <span className="section__eyebrow">Conheça</span>
          <h2 className="section__title">Saúde, estética e produtos no mesmo endereço.</h2>
          <p className="section__text">
            Na {business.name}, você encontra atendimento veterinário, centro de estética e Pet Store
            em {business.cityShort}. Fale com a equipe para conhecer os serviços e consultar os
            horários disponíveis.
          </p>

          <ul className="about__points">
            {CONFIRMED.map(({ Icon, text }) => (
              <li key={text} className="about__point">
                <span className="about__point-badge">
                  <Icon className="about__point-icon" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {photos.length > 0 ? (
          <ul className="about__gallery">
            {photos.slice(0, 3).map((photo) => (
              <li key={photo.src}>
                <Figure
                  className="about__photo"
                  src={photo.src}
                  alt={photo.alt}
                  width={720}
                  height={480}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="about__panel">
            <span className="about__panel-blob" aria-hidden="true" />
            <ul className="about__areas">
              {AREAS.map(({ Icon, label, detail }) => (
                <li key={label} className="about__area">
                  <span className="about__area-badge">
                    <Icon className="about__area-icon" />
                  </span>
                  <span className="about__area-copy">
                    <strong className="about__area-label">{label}</strong>
                    <span className="about__area-detail">{detail}</span>
                  </span>
                </li>
              ))}
            </ul>

            <a
              className="about__rating"
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="about__rating-score">
                <StarIcon className="about__rating-star" />
                {business.rating.score}
              </span>
              <span className="about__rating-copy">
                <span className="about__rating-label">
                  no Google · {business.rating.count} avaliações
                </span>
                <span className="about__rating-date">
                  Dados consultados em {business.rating.checkedOn}
                </span>
              </span>
            </a>
          </div>
        )}
      </div>
    </>
  );
}
