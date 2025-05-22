#!/bin/bash

set -e

echo "🔍 Iniciando auditoría y refactorización GraphQL..."

# Ruta base del proyecto
BASE_DIR="$(pwd)/modules"

# Auditar resolvers fuera de graphql/resolvers
find "$BASE_DIR" -type f -name "*.resolver.ts" | while read -r resolver; do
  if [[ "$resolver" != *"graphql/resolvers/"* ]]; then
    echo "⚠️  Moviendo resolver fuera de lugar: $resolver"
    module_dir=$(dirname "$resolver" | sed 's|/resolvers||')
    mkdir -p "$module_dir/graphql/resolvers"
    mv "$resolver" "$module_dir/graphql/resolvers/"
  fi

done

# Unificar nombres: create-* y update-* con nombres en español
find "$BASE_DIR" -type f -name "crear-*.input.ts" -or -name "actualizar-*.input.ts" | while read -r file; do
  echo "✏️  Renombrando archivo en español: $file"
  renamed=$(echo "$file" | sed -e 's|crear-|create-|' -e 's|actualizar-|update-|')
  mv "$file" "$renamed"
done

# Aplicar PartialType a inputs de update
find "$BASE_DIR" -type f -name "update-*.input.ts" | while read -r input; do
  if ! grep -q 'PartialType' "$input"; then
    echo "🧩 Aplicando PartialType en: $input"
    original=$(echo "$input" | sed 's|update-|create-|')
    base_class=$(basename "$original" .ts | sed 's/.input//g' | sed -e 's/-/ /g' -e 's/\b[a-z]/\u&/g' -e 's/ //g')
    sed -i "1i import { PartialType } from '@nestjs/graphql';\nimport { ${base_class}Input } from './${base_class,,}.input';\n" "$input"
    echo -e "\nexport class Update${base_class}Input extends PartialType(${base_class}Input) {}" > "$input"
  fi

done

# Crear graphql/enums si no existe
find "$BASE_DIR" -type d -name "graphql" | while read -r gql_dir; do
  if [ ! -d "$gql_dir/enums" ]; then
    echo "📁 Creando carpeta enums en: $gql_dir"
    mkdir "$gql_dir/enums"
  fi
done

echo "✅ Refactorización completa."
