import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'ec2-44-194-92-192.compute-1.amazonaws.com',
    port: 5432,
    username: 'xtxjysxpaqizvl',
    password: 'e0b0379fda5e0b6d898e22911ff0d9452307588466e48a3ace47965562581b58',
    database: 'dfs4rfppeg7fr7',
    entities: ['src/database/entities/*.ts'],
    migrations: ['src/database/migrations/*.ts'],
    ssl: { rejectUnauthorized: false }
});

export const initializeDataSource = async () => {
    await dataSource.initialize()
        .then(() => {
            console.log('Database started!');
        })
        .catch((error) => {
            console.log('Error during start database: ', error.message);
        });
}