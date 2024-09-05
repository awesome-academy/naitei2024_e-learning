import { DataSource } from 'typeorm';
import { join } from 'path';
import dotenv from 'dotenv';
dotenv.config();

const dbName =
  process.env.NODE_ENV === 'test' ? process.env.DB_TEST : process.env.DB_NAME;

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: dbName,
  logging: false,
  synchronize: false,
  entities: [join(__dirname, '../entity/*.entity.{ts, js}')],
  migrations: [join(__dirname, '../migration/*.{ts, js}')],
  subscribers: [join(__dirname, '../subscriber/*.{ts, js}')],
});
