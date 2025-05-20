import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

ConfigModule.forRoot({ isGlobal: true });

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: process.env.DB_SYNC === 'true',
  entities: [join(__dirname, '../modules/**/entities/*.entity.{ts,js}')],
  migrations: [join(__dirname, 'migrations/*.{ts,js}')],
  logging: process.env.DB_LOGS === 'true',
});
