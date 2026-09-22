/**
 * Gera copias otimizadas (WebP) das imagens originais de `assets/` em `public/images/`.
 * Os arquivos originais nunca sao alterados nem movidos.
 *
 * Todas as origens tem 1536x1024 (3:2). As copias mantem exatamente essa proporcao
 * e o enquadramento original: apenas reduzimos a escala, sem recorte.
 *
 * Uso: npm run images
 */
import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE_DIR = path.join(root, 'assets');
const OUTPUT_DIR = path.join(root, 'public', 'images');

/** Origem -> nome descritivo da copia + larguras geradas. */
const IMAGES = [
  { source: 'hero-pets.png', name: 'hero-cachorro-e-gato', widths: [800, 1200], quality: 82 },
  { source: 'atendimento-veterinario.png', name: 'servico-atendimento-veterinario', widths: [480, 720], quality: 80 },
  { source: 'banho-e-tosa.png', name: 'servico-banho-e-tosa', widths: [480, 720], quality: 80 },
  { source: 'pet-store.png', name: 'servico-pet-store', widths: [480, 720], quality: 80 },
];

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} kB`;

async function main() {
  const disponiveis = await readdir(SOURCE_DIR);
  const faltando = IMAGES.filter((image) => !disponiveis.includes(image.source));
  if (faltando.length > 0) {
    console.error(`Imagens ausentes em assets/: ${faltando.map((i) => i.source).join(', ')}`);
    process.exit(1);
  }

  await mkdir(OUTPUT_DIR, { recursive: true });

  for (const image of IMAGES) {
    const sourcePath = path.join(SOURCE_DIR, image.source);
    const metadata = await sharp(sourcePath).metadata();
    const origem = await stat(sourcePath);
    console.log(`\n${image.source}  ${metadata.width}x${metadata.height}  ${kb(origem.size)}`);

    for (const width of image.widths) {
      const height = Math.round((width * metadata.height) / metadata.width);
      const outputPath = path.join(OUTPUT_DIR, `${image.name}-${width}.webp`);
      await sharp(sourcePath)
        .resize({ width, height, fit: 'cover' })
        .webp({ quality: image.quality, effort: 6 })
        .toFile(outputPath);
      const gerado = await stat(outputPath);
      console.log(`  -> ${path.basename(outputPath)}  ${width}x${height}  ${kb(gerado.size)}`);
    }
  }

  console.log('\nCopias otimizadas geradas. Originais preservados em assets/.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
