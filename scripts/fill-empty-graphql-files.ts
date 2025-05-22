#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';

function toPascalCase(fileName: string) {
  return fileName
    .replace(/\.input\.ts$|\.type\.ts$/, '')
    .split(/[-_]/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function fillEmptyGraphQLFiles() {
  const patterns = ['src/modules/**/*.input.ts', 'src/modules/**/*.type.ts'];

  for (const pattern of patterns) {
    const files = glob.sync(pattern);

    for (const filePath of files) {
      const content = fs.readFileSync(filePath, 'utf-8');
      if (content.trim().length > 0) continue;

      const isInput = filePath.endsWith('.input.ts');
      const className = toPascalCase(path.basename(filePath));
      const importLine = isInput
        ? `import { InputType, Field } from '@nestjs/graphql';`
        : `import { ObjectType, Field, Int } from '@nestjs/graphql';`;
      const decorator = isInput ? '@InputType()' : '@ObjectType()';
      const fieldType = isInput
        ? `  @Field()\n  placeholder: string;`
        : `  @Field(() => Int)\n  id: number;`;

      const fileContent = `${importLine}

${decorator}
export class ${className} {
${fieldType}
}
`;

      fs.writeFileSync(filePath, fileContent);
      console.log(`✅ Archivo rellenado: ${filePath}`);
    }
  }
}

fillEmptyGraphQLFiles();
