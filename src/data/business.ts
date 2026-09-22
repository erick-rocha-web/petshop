/**
 * Fonte de verdade da empresa.
 *
 * Este e o unico arquivo que Erick precisa editar para trocar telefone, endereco,
 * servicos, mensagens de WhatsApp e textos das secoes. Nenhum componente repete
 * esses valores.
 *
 * REGRA DE CONTEUDO: so entram aqui dados confirmados pela empresa (perfil do
 * Google Maps + conversa no WhatsApp em 22/09/2026). Campos nao confirmados
 * ficam ausentes de proposito e estao listados em `pendencias`.
 */

export type IntentId = 'geral' | 'horario' | 'veterinario' | 'banho' | 'petstore';

export const business = {
  /** Nome apresentado na interface. */
  name: 'Essência Animal Vet',
  /** Forma curta da descricao do Maps ("Pet Shop, Clínica Veterinária e Pet Store"). */
  shortDescription: 'Clínica veterinária, banho e tosa e Pet Store',
  city: 'Taguatinga Sul, Brasília — DF',
  cityShort: 'Taguatinga Sul',

  /** Telefone que tambem e o WhatsApp. Formato de exibicao. */
  phoneDisplay: '(61) 99813-5153',
  /** String internacional usada para montar TODOS os links de WhatsApp. Nao alterar digitos. */
  whatsappNumber: '5561998135153',

  address: {
    line1: 'St. A Sul QSA 22, Lote 1',
    line2: 'Taguatinga Sul, Brasília — DF',
    zip: '72015-220',
  },

  /** Perfil fornecido por Erick (CID do Google Maps mantido como string). */
  mapsUrl: 'https://www.google.com/maps?cid=4402007383073806765',

  /** Retrato do Maps, nao um dado atualizado ao vivo. */
  rating: {
    score: '4,9',
    count: 122,
    checkedOn: '22/09/2026',
  },

  /**
   * A empresa informou apenas "atendimento com horário agendado".
   * Os horarios de cada dia da semana NAO foram confirmados e por isso nao existem aqui.
   */
  scheduling: 'Atendimento com horário agendado',
  schedulingNote: 'Consulte a disponibilidade pelo WhatsApp.',

  /**
   * Fotos reais autorizadas da empresa. Enquanto a lista estiver vazia, a secao
   * "Conheça" usa a composicao ilustrativa. Basta preencher com
   * { src, alt } para a galeria aparecer no lugar.
   */
  realPhotos: [] as Array<{ src: string; alt: string }>,
} as const;

/** Um cartao de servico da secao "Como podemos ajudar seu pet?". */
export type Service = {
  id: Extract<IntentId, 'veterinario' | 'banho' | 'petstore'>;
  title: string;
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
    id: 'veterinario',
    title: 'Atendimento veterinário',
    description: 'Consultas e exames com horário agendado, no mesmo endereço.',
    items: ['Consultas', 'Vacinação', 'Exames laboratoriais', 'Exames complementares'],
    ctaLabel: 'Solicitar atendimento',
    image: {
      src: '/images/servico-atendimento-veterinario-720.webp',
      srcSet:
        '/images/servico-atendimento-veterinario-480.webp 480w, /images/servico-atendimento-veterinario-720.webp 720w',
      alt: 'Gato cinza e branco deitado sobre uma toalha clara, ao lado de um estetoscópio.',
      width: 720,
      height: 480,
    },
  },
  {
    id: 'banho',
    title: 'Banho e tosa',
    description: 'Centro de estética para o dia a dia do seu pet.',
    items: ['Banho', 'Tosa', 'Toalhas descartáveis', 'Cromoterapia'],
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
    id: 'petstore',
    title: 'Pet Store',
    description: 'Produtos e medicamentos para pets no balcão da clínica.',
    items: ['Produtos para pets', 'Medicamentos', 'Disponibilidade confirmada pela equipe', 'Valores informados no contato'],
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

export const heroImage = {
  src: '/images/hero-cachorro-e-gato-1200.webp',
  srcSet: '/images/hero-cachorro-e-gato-800.webp 800w, /images/hero-cachorro-e-gato-1200.webp 1200w',
  alt: 'Cachorro caramelo sentado ao lado de um gato cinza e branco deitado, sobre um tecido claro.',
  width: 1200,
  height: 800,
};

/**
 * Mensagens preparadas para o WhatsApp. A pessoa revisa e envia; o site nunca envia sozinho.
 * Sao textos de contato, nunca confirmacao de agendamento.
 */
export const whatsappMessages: Record<IntentId, string> = {
  geral: 'Olá! Vi a página da Essência Animal Vet e gostaria de saber mais sobre os serviços.',
  horario:
    'Olá! Vi a página da Essência Animal Vet e gostaria de consultar os horários disponíveis para atendimento.',
  veterinario:
    'Olá! Gostaria de informações sobre atendimento veterinário na Essência Animal Vet e de consultar os horários disponíveis.',
  banho:
    'Olá! Gostaria de saber mais sobre o banho e tosa da Essência Animal Vet e consultar os horários disponíveis.',
  petstore:
    'Olá! Gostaria de consultar a disponibilidade e os valores de produtos na Pet Store da Essência Animal Vet.',
};

/** Rotulos dos assuntos na area "Vamos conversar?". */
export const intentLabels: Record<Exclude<IntentId, 'horario'>, string> = {
  geral: 'Dúvida geral',
  veterinario: 'Atendimento veterinário',
  banho: 'Banho e tosa',
  petstore: 'Pet Store',
};

export const faq = [
  {
    question: 'Preciso marcar um horário?',
    answer:
      'Sim. A empresa informa que o atendimento é realizado com horário agendado. Entre em contato para consultar a disponibilidade.',
  },
  {
    question: 'Quais serviços veterinários vocês oferecem?',
    answer:
      'Consultas, vacinas e exames laboratoriais e complementares. Consulte a equipe para saber mais sobre o atendimento que seu pet precisa.',
  },
  {
    question: 'Vocês têm banho e tosa?',
    answer:
      'A empresa conta com centro de estética e serviços de banho e tosa. Os detalhes e horários são confirmados pelo WhatsApp.',
  },
  {
    question: 'Posso consultar produtos e medicamentos pelo WhatsApp?',
    answer: 'Sim, você pode falar com a equipe para consultar a disponibilidade e os valores.',
  },
];

/** Identificacao da demonstracao. Nao afirmar contratacao nem site oficial. */
export const preview = {
  badge: 'Prévia de site para avaliação',
  author: 'Proposta de site desenvolvida por Erick Rocha',
  imageNote: 'Imagens ilustrativas',
};
