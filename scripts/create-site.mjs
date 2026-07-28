import { cp, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import process from 'node:process';

const name = process.argv[2];
if (!name) {
  console.error('Usage: npm run create -- <new-project-directory>');
  process.exit(1);
}
const root = resolve(import.meta.dirname, '..');
const destination = resolve(process.cwd(), name);
await mkdir(destination, { recursive: false });
await cp(resolve(root, 'template'), destination, { recursive: true });
await cp(resolve(root, 'components'), resolve(destination, 'src/lib/site-kit'), { recursive: true });
await cp(resolve(root, 'assets/static'), resolve(destination, 'static'), {
  recursive: true,
  force: true
});
console.log(`Created ${destination}. Run npm install, then npm run dev.`);
