#!/bin/bash

echo "🔍 Iniciando auditoría de arquitectura GraphQL..."
echo "==============================================="

modules_path="./modules"
modified_modules=()

for module in $(ls -1 ${modules_path}); do
  module_path="${modules_path}/${module}"
  graphql_path="${module_path}/graphql"

  if [[ ! -d "${graphql_path}" ]]; then
    continue
  fi

  echo "📦 Auditando módulo: ${module}"

  # Verificar create-*.input.ts y update-*.input.ts
  create_inputs=$(find "${graphql_path}/inputs" -type f -name 'create-*.input.ts' 2>/dev/null)
  for create_input in ${create_inputs}; do
    base_name=$(basename "${create_input}" | sed -E 's/^create-(.*)\.input\.ts$/\1/')
    update_input="${graphql_path}/inputs/update-${base_name}.input.ts"
    if [[ ! -f "${update_input}" ]]; then
      echo "  ❌ Falta: update-${base_name}.input.ts"
    else
      # Verificar uso de PartialType
      if ! grep -q "PartialType(" "${update_input}"; then
        echo "  ⚠️  update-${base_name}.input.ts no extiende PartialType"
      else
        echo "  ✔️  update-${base_name}.input.ts ... [OK]"
      fi
    fi
  done

  # Verificar que los resolvers estén solo en graphql/resolvers
  legacy_resolvers=$(find "${module_path}" -maxdepth 1 -type f -name '*resolver.ts')
  if [[ -n "${legacy_resolvers}" ]]; then
    echo "  ❌ Detectado resolver fuera de graphql/:"
    echo "${legacy_resolvers}" | sed 's/^/     - /'
  else
    echo "  ✔️  Todos los resolvers están en graphql/resolvers ... [OK]"
  fi

  # Verificar que cada entity tenga su type correspondiente
  for entity in $(find "${module_path}/entities" -type f -name '*.entity.ts' 2>/dev/null); do
    base_name=$(basename "${entity}" .entity.ts)
    type_file="${graphql_path}/types/${base_name}.type.ts"
    if [[ ! -f "${type_file}" ]]; then
      echo "  ❌ Falta type para entidad: ${base_name}.type.ts"
    else
      echo "  ✔️  Type encontrado: ${base_name}.type.ts"
    fi
  done

  # Verificar decoradores en inputs y outputs
  for input_file in $(find "${graphql_path}/inputs" -type f -name '*.ts' 2>/dev/null); do
    if ! grep -q '@InputType' "${input_file}"; then
      echo "  ⚠️  Falta @InputType en: $(basename "${input_file}")"
    fi
  done

  for type_file in $(find "${graphql_path}/types" -type f -name '*.ts' 2>/dev/null); do
    if ! grep -q '@ObjectType' "${type_file}"; then
      echo "  ⚠️  Falta @ObjectType en: $(basename "${type_file}")"
    fi
  done

  echo "-----------------------------------------------"
done

echo "🏁 Auditoría completada."
