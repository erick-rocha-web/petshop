/**
 * Fonte de verdade da empresa.
 *
 * Este e o unico arquivo que Erick precisa editar para trocar telefone, endereco,
 * servicos, mensagens de WhatsApp e textos das secoes. Nenhum componente repete
 * esses valores.
 *
 * REGRA DE CONTEUDO: so entram aqui dados confirmados pela Animalandia Pet Shop
 * (cadastro do Google + retorno da propria empresa: "Nosso maior foco e banho e
 * tosa"). O que nao foi confirmado — grade de horarios, precos, area e taxa de
 * entrega, marcas, modalidades de banho e tosa — fica ausente de proposito e
 * esta listado em `docs/spec.md`.
 */

/** Assuntos possiveis de contato. Cada um tem uma mensagem propria de WhatsApp. */
export type IntentId = 'geral' | 'banho' | 'produtos';

export const business = {
  /** Nome apresentado na interface. */
  name: 'Animalandia Pet Shop',
  /** Forma curta usada no rodape e nos metadados. */
  shortDescription: 'Banho e tosa, rações, brinquedos e acessórios para pets',
  city: 'Setor Garavelo, Aparecida de Goiânia — GO',
  cityShort: 'Setor Garavelo',

  /** Telefone que tambem e o WhatsApp. Formato de exibicao. */
  phoneDisplay: '(62) 98541-0004',
  /** String internacional usada para montar TODOS os links de WhatsApp e `tel:`. Nao alterar digitos. */
  whatsappNumber: '5562985410004',

  address: {
    line1: 'Av. da Paz, S/N — Qd. 146 Lt. 04',
    line2: 'St. Garavelo, Aparecida de Goiânia — GO',
    zip: '74930-570',
  },

  /**
   * Consulta usada para montar o link do Google Maps em `mapsLink()`.
   * E uma BUSCA por nome + endereco: nao inventamos Place ID nem coordenadas.
   */
  mapsQuery:
    'Animalandia Pet Shop, Av. da Paz, S/N - Qd. 146 Lt 04 - St. Garavelo, Aparecida de Goiânia - GO, 74930-570',

  /**
   * A empresa NAO informou a grade semanal. O horario visto no Maps ("fecha as
   * 19h") e um estado momentaneo e nao permite deduzir os dias e horarios, entao
   * a pagina so oferece a consulta pelo WhatsApp.
   */
  scheduling: 'Horários consultados pelo WhatsApp',
  schedulingNote: 'A equipe informa os horários disponíveis para banho e tosa.',

  /**
   * Fotos reais autorizadas da loja. Enquanto a lista estiver vazia, a secao
   * "Conheca" usa a composicao ilustrativa. Basta preencher com { src, alt }
   * para a galeria aparecer no lugar.
   */
  realPhotos: [] as Array<{ src: string; alt: string }>,
} as const;

/** Facilidades registradas no cadastro da loja. Nada aqui foi deduzido. */
export type StoreFeatureId = 'retirada' | 'entrega' | 'estacionamento' | 'acessibilidade';

export const storeFeatures: Array<{ id: StoreFeatureId; label: string }> = [
  { id: 'retirada', label: 'Compras e retirada na loja' },
  { id: 'entrega', label: 'Entrega' },
  { id: 'estacionamento', label: 'Estacionamento gratuito no local' },
  { id: 'acessibilidade', label: 'Entrada acessível a cadeirantes' },
];

/** Um cartao da secao "Serviços". */
export type Service = {
  id: Exclude<IntentId, 'geral'>;
  title: string;
  /** O cartao em destaque recebe o rotulo `badge` e o acabamento principal. */
  badge?: string;
  description: string;
  /** Ate quatro itens, todos respaldados pelo material fornecido. */
  items: string[];
  ctaLabel: string;
  image: {
    /** Copias otimizadas geradas por `npm run images` a partir de assets/. */
    src: string;
    srcSet: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const services: Service[] = [
  {
    id: 'banho',
    title: 'Banho e tosa',
    badge: 'Nosso maior foco',
    description:
      'O serviço principal da loja. Fale com a equipe para combinar o atendimento do seu pet.',
    items: ['Banho', 'Tosa', 'Horários consultados pelo WhatsApp'],
    ctaLabel: 'Consultar horários',
    image: {
      src: '/images/servico-banho-e-tosa-720.webp',
      srcSet: '/images/servico-banho-e-tosa-480.webp 480w, /images/servico-banho-e-tosa-720.webp 720w',
      alt: 'Cachorro de pelo claro e cacheado enrolado em uma toalha, ao lado de uma escova de madeira.',
      width: 720,
      height: 480,
    },
  },
  {
    id: 'produtos',
    title: 'Produtos e acessórios',
    description:
      'Rações, brinquedos, acessórios e outros itens para o dia a dia. Compras e retirada na loja, com entrega.',
    items: ['Compras e retirada na loja', 'Entrega', 'Disponibilidade consultada pelo WhatsApp'],
    ctaLabel: 'Consultar produtos',
    image: {
      src: '/images/servico-pet-store-720.webp',
      srcSet: '/images/servico-pet-store-480.webp 480w, /images/servico-pet-store-720.webp 720w',
      alt: 'Comedouro verde com ração, escova de madeira, bola de corda e guia sobre uma mesa clara.',
      width: 720,
      height: 480,
    },
  },
];

/**
 * "Tambem temos na loja".
 *
 * Categorias confirmadas pela propria empresa no WhatsApp. Nao ha marca, preco,
 * especie de peixe, raca de coelho nem quantidade em estoque: nada disso foi
 * informado, e a disponibilidade e sempre remetida a equipe.
 *
 * Peixes e coelhos sao ANIMAIS VENDIDOS na loja. Ficam num grupo proprio
 * justamente para nao serem lidos como atendimento, banho, tosa ou servico
 * veterinario para essas especies.
 *
 * Medicamentos entram so como categoria a venda. A pagina nao orienta uso,
 * dosagem, indicacao terapeutica nem dispensa receita.
 */
export type CategoryId =
  | 'racoes'
  | 'medicamentos'
  | 'brinquedos'
  | 'acessorios'
  | 'peixes'
  | 'coelhos';

export type CatalogGroup = {
  title: string;
  /** Texto curto que enquadra o grupo; nada aqui promete estoque. */
  note?: string;
  categories: Array<{
    id: CategoryId;
    label: string;
    /** Mensagem propria da categoria, codificada por `whatsappLinkFor`. */
    message: string;
  }>;
};

export const catalog: CatalogGroup[] = [
  {
    title: 'Produtos',
    categories: [
      {
        id: 'racoes',
        label: 'Rações',
        message:
          'Olá, pessoal da Animalandia! Gostaria de consultar a disponibilidade de rações na loja.',
      },
      {
        id: 'brinquedos',
        label: 'Brinquedos',
        message:
          'Olá, pessoal da Animalandia! Gostaria de consultar a disponibilidade de brinquedos na loja.',
      },
      {
        id: 'acessorios',
        label: 'Acessórios pet',
        message:
          'Olá, pessoal da Animalandia! Gostaria de consultar a disponibilidade de acessórios pet na loja.',
      },
      {
        id: 'medicamentos',
        label: 'Medicamentos',
        message:
          'Olá, pessoal da Animalandia! Gostaria de consultar a disponibilidade de medicamentos na loja.',
      },
    ],
  },
  {
    title: 'Animais à venda',
    note: 'Vendidos na loja.',
    categories: [
      {
        id: 'peixes',
        label: 'Peixes',
        message:
          'Olá, pessoal da Animalandia! Gostaria de consultar a disponibilidade de peixes na loja.',
      },
      {
        id: 'coelhos',
        label: 'Coelhos',
        message:
          'Olá, pessoal da Animalandia! Gostaria de consultar a disponibilidade de coelhos na loja.',
      },
    ],
  },
];

/** Aviso institucional da categoria de medicamentos. Nao e orientacao de uso. */
export const medicinesNote =
  'Medicamentos são vendidos na loja e a equipe informa a disponibilidade. Esta página não indica uso, dosagem nem substitui a orientação de um médico-veterinário.';

export const heroImage = {
  src: '/images/hero-cachorro-e-gato-1200.webp',
  srcSet: '/images/hero-cachorro-e-gato-800.webp 800w, /images/hero-cachorro-e-gato-1200.webp 1200w',
  alt: 'Cachorro caramelo sentado ao lado de um gato cinza e branco deitado, sobre um tecido claro.',
  width: 1200,
  height: 800,
};

/**
 * Mensagens preparadas para o WhatsApp. A pessoa revisa e envia; o site nunca
 * envia sozinho. Sao textos de CONSULTA — nenhuma confirma horario reservado.
 */
export const whatsappMessages: Record<IntentId, string> = {
  geral: 'Olá, pessoal da Animalandia! Vi a página de vocês e gostaria de falar com a equipe.',
  banho:
    'Olá, pessoal da Animalandia! Gostaria de saber sobre o banho e tosa e consultar os horários disponíveis.',
  produtos:
    'Olá, pessoal da Animalandia! Gostaria de consultar a disponibilidade de um produto ou animal na loja.',
};

/** Rotulos dos assuntos na area "Vamos conversar?". */
export const intentLabels: Record<IntentId, string> = {
  geral: 'Dúvida geral',
  banho: 'Banho e tosa',
  produtos: 'Produtos e acessórios',
};

export const faq = [
  {
    question: 'Como consultar um horário para banho e tosa?',
    answer:
      'Pelo WhatsApp. A equipe informa os horários disponíveis e combina o atendimento com você. A página não reserva horário.',
  },
  {
    question: 'Onde fica a loja?',
    answer: `Na ${business.address.line1}, ${business.address.line2}, CEP ${business.address.zip}. O botão de localização abre o endereço no Google Maps.`,
  },
  {
    question: 'O que a loja vende, além do banho e tosa?',
    answer:
      'Rações, brinquedos, acessórios pet e medicamentos, e também peixes e coelhos. Entre em contato com a equipe pelo WhatsApp para confirmar a disponibilidade do que você procura.',
  },
  {
    question: 'A loja tem estacionamento e entrada acessível?',
    answer:
      'O cadastro da loja informa estacionamento gratuito no local e entrada acessível a cadeirantes.',
  },
];

/** Identificacao da demonstracao. Nao afirmar contratacao nem site oficial. */
export const preview = {
  badge: 'Prévia de site para avaliação',
  author: 'Proposta de site desenvolvida por Erick Rocha',
  imageNote: 'Imagens ilustrativas',
};
