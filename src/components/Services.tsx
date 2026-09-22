/**
 * Servicos da loja.
 *
 * Banho e tosa vem primeiro e recebe o cartao em destaque — foi o que a propria
 * empresa confirmou como foco principal. Produtos e acessorios aparecem como
 * informacao secundaria, com a disponibilidade sempre remetida ao WhatsApp.
 *
 * Os cartoes tem o mesmo tamanho e as imagens ocupam exatamente a mesma area em
 * todos os tamanhos de tela. Nenhum carrossel: no celular os cartoes empilham.
 *
 * O botao de cada cartao apenas seleciona o assunto na area "Vamos conversar?"
 * logo abaixo. Nao abre o WhatsApp.
 */
import type { IntentId } from '../data/business';
import { services } from '../data/business';
import { Figure } from './Figure';
import { CheckIcon, ScissorsIcon, StoreIcon } from './Icons';
import './services.css';

const ICONS: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  banho: ScissorsIcon,
  produtos: StoreIcon,
};

type ServicesProps = {
  selected: IntentId;
  onSelect: (intent: IntentId) => void;
};

export function Services({ selected, onSelect }: ServicesProps) {
  return (
    <>
      <div className="section__head">
        <span className="section__eyebrow">Serviços</span>
        <h2 className="section__title">Banho e tosa é o nosso maior foco.</h2>
        <p className="section__text">
          Escolha um assunto para preparar a mensagem e falar com a equipe.
        </p>
      </div>

      <ul className="services">
        {services.map((service) => {
          const Icon = ICONS[service.id];
          const isSelected = selected === service.id;

          return (
            <li
              key={service.id}
              className={['service-card', service.badge && 'service-card--featured']
                .filter(Boolean)
                .join(' ')}
            >
              {service.badge && <span className="service-card__badge">{service.badge}</span>}

              <Figure
                className="service-card__media"
                src={service.image.src}
                srcSet={service.image.srcSet}
                sizes="(min-width: 900px) 540px, 100vw"
                alt={service.image.alt}
                width={service.image.width}
                height={service.image.height}
              />

              <div className="service-card__body">
                <h3 className="service-card__title">
                  <Icon className="service-card__icon" />
                  {service.title}
                </h3>
                <p className="service-card__text">{service.description}</p>

                <ul className="service-card__items">
                  {service.items.map((item) => (
                    <li key={item} className="service-card__item">
                      <CheckIcon className="service-card__check" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="btn btn--secondary btn--block service-card__cta"
                  aria-pressed={isSelected}
                  onClick={() => onSelect(service.id)}
                >
                  {service.ctaLabel}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
