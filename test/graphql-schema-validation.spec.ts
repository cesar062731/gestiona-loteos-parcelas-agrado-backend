import { readdirSync, readFileSync, statSync } from 'fs';
import { join, basename } from 'path';

const modulesDir = join(__dirname, '../src/modules');

function walk(dir: string, ext: string, files: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) walk(fullPath, ext, files);
    else if (fullPath.endsWith(ext)) files.push(fullPath);
  }
  return files;
}

describe('GraphQL Schema Validation', () => {
  const modules = readdirSync(modulesDir).filter((mod) =>
    statSync(join(modulesDir, mod)).isDirectory()
  );

  it.each(modules)('📦 Módulo %s - Inputs deben tener @InputType', (mod) => {
    const inputs = walk(join(modulesDir, mod, 'graphql/inputs'), '.ts');
    for (const input of inputs) {
      const content = readFileSync(input, 'utf-8');
      expect(content).toMatch(/@InputType\(/);
    }
  });

  it.each(modules)('📦 Módulo %s - Types deben tener @ObjectType', (mod) => {
    const types = walk(join(modulesDir, mod, 'graphql/types'), '.ts');
    for (const type of types) {
      const content = readFileSync(type, 'utf-8');
      expect(content).toMatch(/@ObjectType\(/);
    }
  });

  it.each(modules)('📦 Módulo %s - update-* debe extender PartialType(create-*)', (mod) => {
    const inputFiles = walk(join(modulesDir, mod, 'graphql/inputs'), '.ts');
    const createMap = new Map<string, string>();

    inputFiles.forEach((file) => {
      const name = basename(file);
      if (name.startsWith('create-')) {
        createMap.set(name.replace('create-', '').replace('.input.ts', ''), file);
      }
    });

    inputFiles.forEach((file) => {
      const name = basename(file);
      if (name.startsWith('update-')) {
        const key = name.replace('update-', '').replace('.input.ts', '');
        if (createMap.has(key)) {
          const content = readFileSync(file, 'utf-8');
          expect(content).toMatch(/PartialType\(/);
        }
      }
    });
  });

  it.each(modules)('📦 Módulo %s - Resolvers deben estar en graphql/resolvers', (mod) => {
    const resolverDir = join(modulesDir, mod, 'graphql/resolvers');
    const hasResolvers = statSync(resolverDir).isDirectory();
    expect(hasResolvers).toBeTruthy();
  });

  it.each(modules)('📦 Módulo %s - Existe *.type.ts por cada *.entity.ts', (mod) => {
    const entityDir = join(modulesDir, mod, 'entities');
    const typeDir = join(modulesDir, mod, 'graphql/types');
    if (!statSync(entityDir).isDirectory() || !statSync(typeDir).isDirectory()) return;

    const entities = walk(entityDir, '.ts').map((f) =>
      basename(f).replace('.entity.ts', '')
    );
    const types = walk(typeDir, '.ts').map((f) =>
      basename(f).replace('.type.ts', '')
    );

    entities.forEach((entity) => {
      expect(types).toContain(entity);
    });
  });
});
