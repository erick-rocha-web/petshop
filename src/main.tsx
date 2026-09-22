import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Os estilos base entram ANTES dos componentes de proposito.
 * Assim `tokens.css` e `global.css` ficam no inicio da cascata e as regras de
 * cada componente (que tem a mesma especificidade) sempre vencem — por exemplo
 * `.header__cta { display: none }` sobre `.btn { display: inline-flex }`.
 */
import './styles/tokens.css';
import './styles/global.css';

import { App } from './App';

const container = document.getElementById('root');
if (!container) throw new Error('Elemento #root não encontrado.');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
