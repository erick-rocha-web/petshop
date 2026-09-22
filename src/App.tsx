/**
 * Montagem da pagina unica da previa.
 *
 * O estado do assunto de contato vive aqui porque e compartilhado entre os
 * cartoes de servico e a area "Vamos conversar?". Comeca em "geral" e so muda
 * por acao explicita da pessoa.
 */
import { useCallback, useRef, useState } from 'react';
import type { IntentId } from './data/business';
import { preview } from './data/business';
import { About } from './components/About';
import { ContactIntent } from './components/ContactIntent';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Location } from './components/Location';
import { MobileContactBar } from './components/MobileContactBar';
import { Services } from './components/Services';

export function App() {
  const [intent, setIntent] = useState<IntentId>('geral');
  const intentRef = useRef<HTMLDivElement>(null);

  /**
   * Seleciona o assunto e, se a area de contato estiver fora da tela, faz uma
   * rolagem curta ate ela. Nao abre o WhatsApp nem envia nada.
   */
  const selectIntent = useCallback((next: IntentId) => {
    setIntent(next);

    const element = intentRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const visible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    if (visible) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <div className="preview-strip">
        <div className="container preview-strip__inner">
          <span className="preview-strip__dot" aria-hidden="true" />
          <span>
            {preview.badge}
            <span className="preview-strip__author"> · {preview.author}.</span>
          </span>
        </div>
      </div>

      <Header />

      <main id="conteudo">
        <Hero />

        <section className="section section--alt" id="servicos">
          <div className="container">
            <Services selected={intent} onSelect={selectIntent} />
            <ContactIntent ref={intentRef} selected={intent} onSelect={selectIntent} />
          </div>
        </section>

        <section className="section" id="conheca">
          <div className="container">
            <About />
          </div>
        </section>

        <section className="section section--alt" id="localizacao">
          <div className="container">
            <Location />
          </div>
        </section>

        <section className="section" id="duvidas">
          <div className="container">
            <FAQ />
          </div>
        </section>
      </main>

      <Footer />
      <MobileContactBar />
    </>
  );
}
