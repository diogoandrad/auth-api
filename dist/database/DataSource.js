"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
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
