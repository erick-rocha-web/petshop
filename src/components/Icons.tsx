/**
 * Icones em SVG inline, desenhados com `currentColor` e tamanho controlado por CSS.
 * Sao decorativos: ficam com `aria-hidden` e o significado vem sempre do texto ao lado.
 * Evita carregar uma biblioteca de icones so para esta pagina.
 */
type IconProps = { className?: string };

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
};

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.98-.14.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.18 1.12.16 1.54.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function ScissorsIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="6" cy="6" r="2.6" />
      <circle cx="6" cy="18" r="2.6" />
      <path d="M8.2 7.6 20 18M20 6 8.2 16.4" />
    </svg>
  );
}

export function StoreIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 9h16l-1 10.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5Z" />
      <path d="M8.5 9V6.5a3.5 3.5 0 1 1 7 0V9" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M5 3h3l1.6 4-2 1.4a12 12 0 0 0 5.9 5.9L15 12.3l4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 5.2 2 2 0 0 1 5 3Z" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8.5 3v4M15.5 3v4" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false">
      <path d="m12 3.6 2.45 4.96 5.48.8-3.97 3.86.94 5.45L12 16.11l-4.9 2.57.94-5.45-3.97-3.87 5.48-.79Z" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} strokeWidth={2.2}>
      <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} strokeWidth={1.9}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base} strokeWidth={1.9}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function BagIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M5 8h14l-1 11.5a1.5 1.5 0 0 1-1.5 1.4h-9A1.5 1.5 0 0 1 6 19.5Z" />
      <path d="M9 8V6.2a3 3 0 0 1 6 0V8" />
    </svg>
  );
}

export function TruckIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 6.5h10.5v9H3Z" />
      <path d="M13.5 10h3.8l2.7 3v2.5h-6.5Z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </svg>
  );
}

export function CarIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 14.5 5.8 9A2 2 0 0 1 7.7 7.6h8.6A2 2 0 0 1 18.2 9L20 14.5" />
      <path d="M3.5 14.5h17V18a1 1 0 0 1-1 1h-1.6a1 1 0 0 1-1-1v-.6H7.1v.6a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1Z" />
      <path d="M6.8 17h.01M17.2 17h.01" />
    </svg>
  );
}

export function AccessibleIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12.5" cy="4.5" r="1.8" />
      <path d="M10 8.2h5" />
      <path d="M11.4 8v5.2h4.2" />
      <path d="M15.6 13.2 18 19" />
      <circle cx="10" cy="16" r="4.2" />
    </svg>
  );
}

export function FoodBowlIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3.6 12.2h16.8a8.4 8.4 0 0 1-16.8 0Z" />
      <circle cx="8.8" cy="8.3" r="1.25" />
      <circle cx="12.6" cy="6.4" r="1.25" />
      <circle cx="16.1" cy="8.8" r="1.25" />
    </svg>
  );
}

export function PillIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="2.8" y="8.6" width="18.4" height="6.8" rx="3.4" transform="rotate(-45 12 12)" />
      <path d="M9.6 9.6 14.4 14.4" />
    </svg>
  );
}

export function BallIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 3.8c2.5 2.2 3.9 5 3.9 8.2S14.5 18 12 20.2" />
      <path d="M12 3.8c-2.5 2.2-3.9 5-3.9 8.2S9.5 18 12 20.2" />
    </svg>
  );
}

export function CollarIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <ellipse cx="12" cy="10.2" rx="6.6" ry="5.1" />
      <path d="M12 15.3v1.4" />
      <circle cx="12" cy="18.6" r="1.9" />
    </svg>
  );
}

export function FishIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M16.2 12c0 2.7-2.5 4.9-5.6 4.9S5 14.7 5 12s2.5-4.9 5.6-4.9 5.6 2.2 5.6 4.9Z" />
      <path d="M16.2 12 20.5 8.6v6.8Z" />
      <path d="M8.4 10.6h.01" />
    </svg>
  );
}

export function RabbitIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M9.4 9.7C8.7 7.2 8.5 4.8 9.3 4.5c.8-.3 1.9 1.6 2.6 4.1" />
      <path d="M14.6 9.7c.7-2.5.9-4.9.1-5.2-.8-.3-1.9 1.6-2.6 4.1" />
      <path d="M6.6 15.6a5.4 5.4 0 0 1 10.8 0v1.7a2.7 2.7 0 0 1-2.7 2.7H9.3a2.7 2.7 0 0 1-2.7-2.7Z" />
      <path d="M10.4 14.6h.01M13.6 14.6h.01" />
    </svg>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M14 4h6v6M20 4l-8.5 8.5" />
      <path d="M18 14.5V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V8a1.5 1.5 0 0 1 1.5-1.5H10" />
    </svg>
  );
}
