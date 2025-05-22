import { DataSource } from 'typeorm';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Cargar variables desde .env.[NODE_ENV]
const NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config({ path: path.resolve(process.cwd(), `.env.${NODE_ENV}`) });

// Detectar si estamos en entorno de pruebas
const isTest = NODE_ENV === 'test';

// Resolver ruta base
const ROOT_PATH = path.resolve(__dirname, '../../../');
const entitiesPath = path.resolve(ROOT_PATH, 'src/modules/**/entities/*.entity.{ts,js}');
const migrationsPath = path.resolve(__dirname, 'migrations/*.{ts,js}');

const dataSourceOptions = isTest
  ? {
      type: 'sqlite' as const,
      database: path.resolve(ROOT_PATH, 'test.sqlite'),
      synchronize: true,
      entities: [entitiesPath],
      migrations: [migrationsPath],
      logging: false,
    }
  : {
      type: 'postgres' as const,
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'gestion_loteos',
      synchronize: false,
      entities: [entitiesPath],
      migrations: [migrationsPath],
      logging: process.env.DB_LOGS === 'true',
    };

export const AppDataSource = new DataSource(dataSourceOptions);
export const initializeDataSource = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
  } catch (error) {
    console.error('Error during Data Source initialization:', error);
  }
};