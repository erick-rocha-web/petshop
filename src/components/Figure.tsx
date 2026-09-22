/**
 * Imagem com dimensoes explicitas (evita deslocamento de layout) e fallback
 * visual caso o arquivo nao carregue (SDD secao 6, AC-13).
 *
 * As proporcoes das copias otimizadas sao identicas as dos originais (3:2),
 * entao `aspect-ratio` nunca recorta o enquadramento.
 */
import { useState } from 'react';

type FigureProps = {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** A imagem da abertura carrega com prioridade; as demais ficam preguicosas. */
  priority?: boolean;
  /** Texto do fallback quando a imagem nao carrega. */
  fallbackLabel?: string;
};

export function Figure({
  src,
  srcSet,
  sizes,
  alt,
  width,
  height,
  className,
  priority = false,
  fallbackLabel = 'Imagem indisponível',
}: FigureProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={['figure', className].filter(Boolean).join(' ')}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        data-failed={failed || undefined}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onError={() => setFailed(true)}
      />
      {failed && (
        <span className="figure__fallback" role="img" aria-label={alt}>
          {fallbackLabel}
        </span>
      )}
    </div>
  );
}
