const fs = require('node:fs');
const path = require('node:path');

const src = path.resolve(process.cwd(), 'tokens.json');
const outDir = path.resolve(process.cwd(), 'dist');
const outFile = path.resolve(outDir, 'index.js');
const outTypes = path.resolve(outDir, 'index.d.ts');

fs.mkdirSync(outDir, { recursive: true });
const tokens = fs.readFileSync(src, 'utf-8');
const content = `export const tokens = ${tokens};\n`;
const types = 'export const tokens: Record<string, any>\n';

fs.writeFileSync(outFile, content, 'utf-8');
fs.writeFileSync(outTypes, types, 'utf-8');
