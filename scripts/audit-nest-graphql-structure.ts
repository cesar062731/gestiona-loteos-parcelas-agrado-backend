// scripts/audit-nest-graphql-structure.ts
import { readdirSync, readFileSync, statSync } from 'fs';
import { join, basename } from 'path';

const MODULES_DIR = 'src/modules';

const getAllFiles = (dir: string, filter: (file: string) => boolean): string[] => {
  let results: string[] = [];
  readdirSync(dir).forEach((file) => {
    const fullPath = join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      results = results.concat(getAllFiles(fullPath, filter));
    } else if (filter(fullPath)) {
      results.push(fullPath);
    }
  });
  return results;
};

const getModuleNames = () => readdirSync(MODULES_DIR).filter((f) => statSync(join(MODULES_DIR, f)).isDirectory());

const audit = () => {
  const modules = getModuleNames();
  const issues: string[] = [];

  for (const moduleName of modules) {
    const basePath = join(MODULES_DIR, moduleName);
    const entityFiles = getAllFiles(join(basePath, 'entities'), f => f.endsWith('.entity.ts'));
    const typeFiles = getAllFiles(join(basePath, 'graphql/types'), f => f.endsWith('.type.ts'));
    const inputFiles = getAllFiles(join(basePath, 'graphql/inputs'), f => f.endsWith('.input.ts'));
    const resolverFiles = getAllFiles(join(basePath, 'graphql/resolvers'), f => f.endsWith('.resolver.ts'));

    // 1. Cada entidad tiene su type
    for (const entity of entityFiles) {
      const name = basename(entity).replace('.entity.ts', '');
      const expectedType = typeFiles.find((type) => basename(type).startsWith(name));
      if (!expectedType) {
        issues.push(`[${moduleName}] Falta type para entidad: ${name}`);
      }
    }

    // 2. Inputs deben tener @InputType
    for (const input of inputFiles) {
      const content = readFileSync(input, 'utf-8');
      if (!/@InputType\(/.test(content)) {
        issues.push(`[${moduleName}] Falta @InputType en: ${basename(input)}`);
      }
    }

    // 3. update-* debe extender PartialType(create-*)
    const updates = inputFiles.filter(f => basename(f).startsWith('update-'));
    for (const update of updates) {
      const content = readFileSync(update, 'utf-8');
      if (!/extends PartialType\(/.test(content)) {
        issues.push(`[${moduleName}] update-* sin PartialType en: ${basename(update)}`);
      }
    }

    // 4. Resolvers deben estar en graphql/resolvers
    for (const resolver of getAllFiles(basePath, f => f.endsWith('.resolver.ts'))) {
      if (!resolver.includes('/graphql/resolvers/')) {
        issues.push(`[${moduleName}] Resolver fuera de graphql/resolvers: ${resolver}`);
      }
    }

    // 5. Conflictos de nombres en types
    const nameCount = typeFiles.reduce((acc, file) => {
      const name = basename(file).replace('.type.ts', '');
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    Object.entries(nameCount).forEach(([name, count]) => {
      if (count > 1) {
        issues.push(`[${moduleName}] Duplicidad de nombre type: ${name}`);
      }
    });

    // 6. .entity.ts potencialmente duplicadas
    const baseEntities = entityFiles.map(f => basename(f).replace('.entity.ts', ''));
    const entityBaseNameCount = baseEntities.reduce((acc, name) => {
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    Object.entries(entityBaseNameCount).forEach(([name, count]) => {
      if (count > 1) {
        issues.push(`[${moduleName}] Posibles entidades redundantes: ${name}`);
      }
    });
  }

  if (issues.length === 0) {
    console.log('✅ Auditoría GraphQL finalizada sin observaciones.');
  } else {
    console.log('❌ Auditoría GraphQL detectó problemas:');
    for (const issue of issues) {
      console.log('-', issue);
    }
  }
};

audit();
