// Lista los datos pendientes de completar en src/data/site.ts
import { readFileSync } from 'node:fs';
const lines = readFileSync(new URL('../src/data/site.ts', import.meta.url), 'utf8').split('\n');
const found = lines.map((l, i) => [i + 1, l]).filter(([, l]) => /TODO\('/.test(l) && !l.includes('export const TODO'));
if (!found.length) console.log('✓ No hay datos pendientes.');
else {
  console.log(`Pendientes (${found.length}):`);
  for (const [n, l] of found) console.log(`  src/data/site.ts:${n}  ${l.trim()}`);
}
