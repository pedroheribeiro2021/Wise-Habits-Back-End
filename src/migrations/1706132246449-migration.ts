import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1706132246449 implements MigrationInterface {
    name = 'Migration1706132246449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "habits" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "description" character varying(100) NOT NULL, "priority" integer NOT NULL, "status" integer DEFAULT '0', "weekDays" text DEFAULT '[]', "userId" uuid, CONSTRAINT "PK_b3ec33c2d7af69d09fcf4af7e39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "weekDays" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "days" character varying(100) NOT NULL, "habitsId" uuid, CONSTRAINT "PK_98c31d6bd29caf33e253be961b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "habits" ADD CONSTRAINT "FK_356d1f144ceadad6942fa17af64" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "weekDays" ADD CONSTRAINT "FK_f3d23aca1d64957a64feb60fd26" FOREIGN KEY ("habitsId") REFERENCES "habits"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weekDays" DROP CONSTRAINT "FK_f3d23aca1d64957a64feb60fd26"`);
        await queryRunner.query(`ALTER TABLE "habits" DROP CONSTRAINT "FK_356d1f144ceadad6942fa17af64"`);
        await queryRunner.query(`DROP TABLE "weekDays"`);
        await queryRunner.query(`DROP TABLE "habits"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
