#!/bin/bash

echo "🔧 Ejecutando script extendido para correcciones GraphQL..."
echo "============================================================"

LOG_FILE="graphql-schema-fix-report.log"
> "$LOG_FILE"

read -p "¿Deseas aplicar automáticamente los cambios detectados? (s/n): " confirm
if [[ "$confirm" != "s" ]]; then
  echo "❌ Operación cancelada por el usuario." | tee -a "$LOG_FILE"
  exit 1
fi

count_fixed=0
count_skipped=0
count_missing=0

fix_file() {
  local file=$1
  local decorator=$2

  if [[ -f "$file" ]]; then
    if ! grep -q "@$decorator" "$file"; then
      sed -i "1s/^/@$decorator()\n/" "$file"
      echo "✅ $file => Se añadió @$decorator" | tee -a "$LOG_FILE"
      ((count_fixed++))
    else
      echo "✔️  $file ya tiene @$decorator" | tee -a "$LOG_FILE"
      ((count_skipped++))
    fi
  else
    echo "❌ $file no encontrado" | tee -a "$LOG_FILE"
    ((count_missing++))
  fi
}

validate_and_fix_module() {
  local module_path=$1
  echo "📦 Verificando módulo: $module_path" | tee -a "$LOG_FILE"

  for input in $(find "$module_path/graphql/inputs" -name "*.input.ts" 2>/dev/null); do
    fix_file "$input" "InputType"
  done

  for type in $(find "$module_path/graphql/types" -name "*.type.ts" 2>/dev/null); do
    fix_file "$type" "ObjectType"
  done
}

MODULES_PATH="./modules"

for module in "$MODULES_PATH"/*; do
  if [[ -d "$module" ]]; then
    validate_and_fix_module "$module"
  fi
done

echo "============================================================"
echo "🏁 Correcciones completadas"
echo "🔧 Archivos modificados: $count_fixed"
echo "⚠️  Archivos ya correctos: $count_skipped"
echo "❌ Archivos faltantes: $count_missing"
echo "📄 Ver detalles en $LOG_FILE"
