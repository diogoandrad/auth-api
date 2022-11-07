import { app } from "../app";
import request from "supertest";
import { initializeDataSource } from "../database/DataSource";

describe('Users', () => {

    // let dataSource: any;

    beforeAll(async () => {
        return await initializeDataSource();
    });

    // afterAll(async () => dataSource.destroy());

    test('GetAll', async () => {

        await request(app).get('/users').expect(200);
        
    });

});