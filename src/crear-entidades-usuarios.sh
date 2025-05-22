#!/bin/bash

MIGRATION_NAME="AddUsuarioHabitanteParcela"
DATA_SOURCE="common/database/data-source.ts"

echo "📁 Ejecutando en: $(pwd)"
echo "🔧 Generando migración..."

npx typeorm migration:generate common/database/migrations/$MIGRATION_NAME -d $DATA_SOURCE

if [ $? -eq 0 ]; then
  echo "✅ Migración generada exitosamente."
else
  echo "❌ Error generando la migración. Revisa los logs."
  exit 1
fi

echo "🚀 Aplicando migración..."
npx typeorm migration:run -d $DATA_SOURCE

if [ $? -eq 0 ]; then
  echo "🎉 Migración aplicada correctamente."
else
  echo "❌ Error al aplicar la migración. Revisa los logs."
fi
