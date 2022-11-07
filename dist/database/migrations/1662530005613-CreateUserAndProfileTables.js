"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserAndProfileTables1662530005613 = void 0;
class CreateUserAndProfileTables1662530005613 {
    name = 'CreateUserAndProfileTables1662530005613';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "profiles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "status" boolean NOT NULL DEFAULT true, "name" character varying NOT NULL, CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "status" boolean NOT NULL DEFAULT true, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "profileId" uuid, CONSTRAINT "REL_b1bda35cdb9a2c1b777f5541d8" UNIQUE ("profileId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_b1bda35cdb9a2c1b777f5541d87" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_b1bda35cdb9a2c1b777f5541d87"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "profiles"`);
    }
}
exports.CreateUserAndProfileTables1662530005613 = CreateUserAndProfileTables1662530005613;
