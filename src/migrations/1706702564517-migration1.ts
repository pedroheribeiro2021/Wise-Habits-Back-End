import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration11706702564517 implements MigrationInterface {
    name = 'Migration11706702564517'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "habit_status" ("id" SERIAL NOT NULL, "statusValue" integer NOT NULL, "date" character varying NOT NULL, "habitId" uuid, CONSTRAINT "PK_86e4a100b2cd7b6c4cfc1a99ebe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "habits" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "description" character varying(100) NOT NULL, "priority" integer NOT NULL, "weekDays" text, "userId" uuid, CONSTRAINT "PK_b3ec33c2d7af69d09fcf4af7e39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "habit_status" ADD CONSTRAINT "FK_3e1301dc0cfe7322a7a5a381103" FOREIGN KEY ("habitId") REFERENCES "habits"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "habits" ADD CONSTRAINT "FK_356d1f144ceadad6942fa17af64" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "habits" DROP CONSTRAINT "FK_356d1f144ceadad6942fa17af64"`);
        await queryRunner.query(`ALTER TABLE "habit_status" DROP CONSTRAINT "FK_3e1301dc0cfe7322a7a5a381103"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "habits"`);
        await queryRunner.query(`DROP TABLE "habit_status"`);
    }

}
