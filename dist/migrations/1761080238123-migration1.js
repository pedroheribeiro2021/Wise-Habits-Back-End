"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration11761080238123 = void 0;
class Migration11761080238123 {
    constructor() {
        this.name = 'Migration11761080238123';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "habits" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "description" character varying(100) NOT NULL, "priority" integer NOT NULL, "weekDays" text, "userId" uuid, CONSTRAINT "PK_b3ec33c2d7af69d09fcf4af7e39" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "habit_status" ("id" SERIAL NOT NULL, "statuses" jsonb NOT NULL, "habitId" uuid, CONSTRAINT "PK_86e4a100b2cd7b6c4cfc1a99ebe" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "habits" ADD CONSTRAINT "FK_356d1f144ceadad6942fa17af64" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "habit_status" ADD CONSTRAINT "FK_3e1301dc0cfe7322a7a5a381103" FOREIGN KEY ("habitId") REFERENCES "habits"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "habit_status" DROP CONSTRAINT "FK_3e1301dc0cfe7322a7a5a381103"`);
            yield queryRunner.query(`ALTER TABLE "habits" DROP CONSTRAINT "FK_356d1f144ceadad6942fa17af64"`);
            yield queryRunner.query(`DROP TABLE "habit_status"`);
            yield queryRunner.query(`DROP TABLE "habits"`);
            yield queryRunner.query(`DROP TABLE "users"`);
        });
    }
}
exports.Migration11761080238123 = Migration11761080238123;
