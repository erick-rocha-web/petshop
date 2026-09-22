/**
 * "Tambem temos na loja" — categorias confirmadas pela empresa.
 *
 * Secao secundaria de proposito: um bloco compacto de icones, sem cartao grande
 * por categoria e sem foto de produto (nao temos imagem autorizada de nenhum
 * item, e nao inventamos uma).
 *
 * Cada categoria e um link que apenas ABRE o WhatsApp com a mensagem
 * correspondente ja escrita. Nada e enviado sozinho, nao ha estoque, carrinho
 * nem reserva — quem confirma a disponibilidade e a equipe.
 *
 * Peixes e coelhos aparecem em um grupo proprio, "Animais a venda": sao animais
 * vendidos pela loja, nunca servicos prestados para essas especies.
 */
import { catalog, medicinesNote, type CategoryId } from '../data/business';
import { whatsappLink, whatsappLinkFor } from '../lib/contact';
import {
  BallIcon,
  CollarIcon,
  FishIcon,
  FoodBowlIcon,
  PillIcon,
  RabbitIcon,
  WhatsAppIcon,
} from './Icons';
import './catalog.css';

const ICONS: Record<CategoryId, (props: { className?: string }) => React.JSX.Element> = {
  racoes: FoodBowlIcon,
  brinquedos: BallIcon,
  acessorios: CollarIcon,
  medicamentos: PillIcon,
  peixes: FishIcon,
  coelhos: RabbitIcon,
};

export function Catalog() {
  return (
    <div className="catalog">
      <div className="section__head catalog__head">
        <h2 className="section__title">Também temos na loja</h2>
        <p className="section__text">
          Categorias informadas pela equipe. Toque em uma delas para consultar a disponibilidade no
          WhatsApp.
        </p>
      </div>

      {catalog.map((group) => (
        <div key={group.title} className="catalog__group">
          <p className="catalog__group-title">
            {group.title}
            {group.note && <span className="catalog__group-note">{group.note}</span>}
          </p>

          <ul className="catalog__items">
            {group.categories.map((category) => {
              const Icon = ICONS[category.id];

              return (
                <li key={category.id}>
                  <a
                    className="catalog__item"
                    href={whatsappLinkFor(category.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar disponibilidade de ${category.label.toLowerCase()} no WhatsApp`}
                  >
                    <span className="catalog__item-badge">
                      <Icon className="catalog__item-icon" />
                    </span>
                    <span className="catalog__item-label">{category.label}</span>
                    <WhatsAppIcon className="catalog__item-mark" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div className="catalog__foot">
        <a
          className="btn btn--primary"
          href={whatsappLink('produtos')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="btn__icon" />
          Consultar disponibilidade
        </a>
        <p className="note catalog__note">{medicinesNote}</p>
      </div>
    </div>
  );
}
