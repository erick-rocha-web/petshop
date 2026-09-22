/**
 * Cabecalho fixo com navegacao por ancoras e menu movel acessivel (RF-01).
 *
 * O menu: abre e fecha pelo botao, fecha com Escape, fecha ao escolher um link e
 * sempre devolve o foco ao botao que o abriu.
 *
 * Identidade provisoria: tratamento apenas tipografico. A empresa ainda nao
 * forneceu logotipo, entao nada aqui simula uma marca oficial.
 */
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { business } from '../data/business';
import { whatsappLink } from '../lib/contact';
import { CloseIcon, MenuIcon, WhatsAppIcon } from './Icons';
import './header.css';

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#conheca', label: 'Conheça' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#duvidas', label: 'Dúvidas' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  /** Escape: fecha o menu e devolve o foco ao botao que o abriu (RF-01). */
  const closeAndRestoreFocus = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  /**
   * Link escolhido: fecha o menu sem roubar o foco. Quem continua a navegacao e
   * a propria ancora, que move o ponto de partida do Tab para a secao de destino.
   */
  const closeOnNavigate = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeAndRestoreFocus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, closeAndRestoreFocus]);

  // O menu movel deixa de existir ao passar para o layout de desktop.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 880px)');
    const sync = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#inicio">
          <span className="brand__name">{business.name}</span>
          <span className="brand__place">{business.cityShort}</span>
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          <ul className="header__nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="header__nav-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="btn btn--primary header__cta"
          href={whatsappLink('geral')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="btn__icon" />
          Falar no WhatsApp
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="header__toggle-icon" /> : <MenuIcon className="header__toggle-icon" />}
          <span className="visually-hidden">{open ? 'Fechar menu' : 'Abrir menu'}</span>
        </button>
      </div>

      <div id={panelId} className="header__panel" hidden={!open}>
        <div className="container">
          <nav aria-label="Navegação principal (celular)">
            <ul className="header__panel-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a className="header__panel-link" href={link.href} onClick={closeOnNavigate}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            className="btn btn--primary btn--block header__panel-cta"
            href={whatsappLink('geral')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeOnNavigate}
          >
            <WhatsAppIcon className="btn__icon" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
