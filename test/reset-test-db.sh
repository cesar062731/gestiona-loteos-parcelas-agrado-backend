#!/bin/bash

echo "🧹 Eliminando base de datos de test..."
rm -f ./test.sqlite

echo "🛠️ Generando y aplicando migraciones en entorno TEST..."
NODE_ENV=test npx typeorm migration:run -d src/common/database/data-source.ts

echo "🌱 Insertando datos seed..."
NODE_ENV=test npx ts-node src/common/database/seed.ts

echo "✅ Base de datos de test lista."
