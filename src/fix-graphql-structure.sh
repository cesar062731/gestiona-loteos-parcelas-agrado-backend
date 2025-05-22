#!/bin/bash

echo "🔍 Iniciando verificación de estructura GraphQL..."
echo "==============================================="

MODULES_DIR="./modules"
EXPECTED_SUBDIRS=("inputs" "types" "resolvers" "enums")
MODIFIED_MODULES=()

if [ ! -d "$MODULES_DIR" ]; then
  echo "❌ Error: No se encontró la carpeta $MODULES_DIR"
  exit 1
fi

MODULE_COUNT=0

for module in "$MODULES_DIR"/*; do
  if [ -d "$module" ]; then
    MODULE_COUNT=$((MODULE_COUNT + 1))
    module_name=$(basename "$module")
    GRAPHQL_PATH="$module/graphql"
    created_anything=false

    echo "📦 Módulo detectado: $module_name"

    if [ ! -d "$GRAPHQL_PATH" ]; then
      echo "  🔧 Creando carpeta: graphql/"
      mkdir -p "$GRAPHQL_PATH"
      created_anything=true
    fi

    for subdir in "${EXPECTED_SUBDIRS[@]}"; do
      SUB_PATH="$GRAPHQL_PATH/$subdir"
      if [ ! -d "$SUB_PATH" ]; then
        echo "    ➕ Creando: graphql/$subdir ... [NO OK]"
        mkdir -p "$SUB_PATH"
        created_anything=true
      else
        echo "    ✔️ Existe: graphql/$subdir ... [OK]"
      fi
    done

    if [ "$created_anything" = false ]; then
      echo "  ✅ Estructura completa ... [OK]"
    else
      MODIFIED_MODULES+=("$module_name")
    fi

    echo "-----------------------------------------------"
  fi
done

echo "🏁 Verificación finalizada."

if [ "$MODULE_COUNT" -eq 0 ]; then
  echo "⚠️ No se encontraron módulos en $MODULES_DIR."
elif [ ${#MODIFIED_MODULES[@]} -gt 0 ]; then
  echo "📋 Se modificaron los siguientes módulos:"
  printf '  - %s\n' "${MODIFIED_MODULES[@]}"
else
  echo "✅ Todos los módulos ya estaban correctos."
fi
