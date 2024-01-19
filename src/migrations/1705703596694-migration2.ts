import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration21705703596694 implements MigrationInterface {
    name = 'Migration21705703596694'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "habits" ALTER COLUMN "status" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "habits" ALTER COLUMN "status" DROP DEFAULT`);
    }

}
