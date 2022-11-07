"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUsers1662412642695 = void 0;
class CreateTableUsers1662412642695 {
    name = 'CreateTableUsers1662412642695';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.CreateTableUsers1662412642695 = CreateTableUsers1662412642695;
