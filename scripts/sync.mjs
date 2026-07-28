import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';
import process from 'node:process';

const root = resolve(import.meta.dirname, '..');
const targets = process.argv.slice(2);
if (!targets.length) {
  console.error('Usage: npm run sync -- <project-dir> [project-dir...]');
  process.exit(1);
}

for (const targetArg of targets) {
  const target = resolve(process.cwd(), targetArg);
  const destination = join(target, 'src', 'lib', 'site-kit');
  await mkdir(destination, { recursive: true });
  await cp(join(root, 'components'), destination, { recursive: true, force: true });
  await cp(join(root, 'assets', 'static'), join(target, 'static'), {
    recursive: true,
    force: true
  });
  const marker = {
    source: 'jorisperrenet-site-kit',
    version: JSON.parse(await readFile(join(root, 'package.json'), 'utf8')).version,
    target: basename(target)
  };
  await writeFile(join(destination, '.site-kit.json'), `${JSON.stringify(marker, null, 2)}\n`);
  console.log(`Synced site kit to ${destination}`);
}
