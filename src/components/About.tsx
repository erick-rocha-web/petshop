/**
 * "Conheca a Animalandia".
 *
 * Apenas informacoes confirmadas: o foco em banho e tosa (dito pela propria
 * empresa), produtos e acessorios, as facilidades do cadastro da loja e a
 * localizacao. Sem tempo de mercado, tamanho de equipe, certificacoes, numero de
 * clientes ou depoimentos.
 *
 * As avaliacoes NAO sao copiadas para ca: a pagina leva a ficha do Google, onde
 * a nota e os comentarios ficam sempre atualizados.
 *
 * FOTOS REAIS: se a loja autorizar ate tres fotos, basta preenche-las em
 * `business.realPhotos` que a galeria substitui a composicao ilustrativa.
 */
import { business, storeFeatures, type StoreFeatureId } from '../data/business';
import { mapsLink } from '../lib/contact';
import { Figure } from './Figure';
import {
  AccessibleIcon,
  BagIcon,
  CarIcon,
  ExternalIcon,
  MapPinIcon,
  ScissorsIcon,
  StarIcon,
  StoreIcon,
  TruckIcon,
} from './Icons';
import './about.css';

const AREAS = [
  { Icon: ScissorsIcon, label: 'Banho e tosa', detail: 'O foco principal da loja' },
  { Icon: StoreIcon, label: 'Produtos e acessórios', detail: 'Disponibilidade consultada pela equipe' },
];

const FEATURE_ICONS: Record<StoreFeatureId, (props: { className?: string }) => React.JSX.Element> = {
  retirada: BagIcon,
  entrega: TruckIcon,
  estacionamento: CarIcon,
  acessibilidade: AccessibleIcon,
};

const CONFIRMED = [
  { Icon: ScissorsIcon, text: 'Banho e tosa é o serviço principal da loja.' },
  { Icon: BagIcon, text: 'Produtos e acessórios com compra e retirada na loja, e entrega.' },
  { Icon: MapPinIcon, text: `Localização em ${business.city}.` },
];

export function About() {
  const photos = business.realPhotos;

  return (
    <div className="about">
      <div className="about__content">
        <span className="section__eyebrow">Conheça</span>
        <h2 className="section__title">Uma loja de bairro, com cuidado no banho e tosa.</h2>
        <p className="section__text">
          A {business.name} fica no {business.cityShort}, em Aparecida de Goiânia. O maior foco da
          loja é o banho e tosa, e a equipe também atende quem procura produtos e acessórios para o
          dia a dia do pet.
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
              <Figure className="about__photo" src={photo.src} alt={photo.alt} width={720} height={480} />
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

          <p className="about__features-label">Na loja</p>
          <ul className="about__features">
            {storeFeatures.map(({ id, label }) => {
              const Icon = FEATURE_ICONS[id];
              return (
                <li key={id} className="about__feature">
                  <Icon className="about__feature-icon" />
                  {label}
                </li>
              );
            })}
          </ul>

          <a className="about__reviews" href={mapsLink()} target="_blank" rel="noopener noreferrer">
            <span className="about__reviews-badge">
              <StarIcon className="about__reviews-star" />
            </span>
            <span className="about__reviews-copy">
              <span className="about__reviews-label">Ver avaliações no Google</span>
              <span className="about__reviews-note">
                A nota e os comentários ficam na ficha da loja, sempre atualizados.
              </span>
            </span>
            <ExternalIcon className="about__reviews-external" />
          </a>
        </div>
      )}
    </div>
  );
}
