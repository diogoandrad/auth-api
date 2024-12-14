import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5435,
  username: 'admin',
  password: 'ak&v4xbd',
  database: 'auth_api',
  entities: ['src/database/entities/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  // ssl: { rejectUnauthorized: false },
  // synchronize: false,
  // logging: false,
});

export const initializeDataSource = async () => {
  await dataSource
    .initialize()
    .then(() => {
      console.log('Database started!');
    })
    .catch((error) => {
      console.log('Error during start database: ', error.message);
    });
};
