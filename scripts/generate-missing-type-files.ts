#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';
import { pascalCase } from 'change-case';

const baseDir = path.join(process.cwd(), 'src', 'modules');

function createTypeFile(module: string, entityFile: string) {
  const nameWithoutExtension = entityFile.replace('.entity.ts', '');
  const className = pascalCase(nameWithoutExtension);
  const typeDir = path.join(baseDir, module, 'graphql', 'types');
  const typeFile = path.join(typeDir, `${nameWithoutExtension}.type.ts`);

  if (fs.existsSync(typeFile)) {
    console.log(`✅ Ya existe: ${typeFile}`);
    return;
  }

  if (!fs.existsSync(typeDir)) {
    fs.mkdirSync(typeDir, { recursive: true });
  }

  const content = `import { ObjectType } from '@nestjs/graphql';\n\n@ObjectType()\nexport class ${className} {\n  // TODO: agregar campos\n}\n`;
  fs.writeFileSync(typeFile, content);
  console.log(`🆕 Generado: ${typeFile}`);
}

function scanModules() {
  const modules = fs.readdirSync(baseDir);
  for (const module of modules) {
    const entityDir = path.join(baseDir, module, 'entities');
    if (!fs.existsSync(entityDir)) continue;
    const files = fs.readdirSync(entityDir);
    for (const file of files) {
      if (file.endsWith('.entity.ts')) {
        createTypeFile(module, file);
      }
    }
  }
}

scanModules();