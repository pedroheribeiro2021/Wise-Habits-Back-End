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
exports.verifyUserEmailExistsMiddleware = void 0;
const data_source_1 = require("../data-source");
const AppError_1 = require("../errors/AppError");
const users_entity_1 = require("../entities/users.entity");
const verifyUserEmailExistsMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userRegistred = data_source_1.AppDataSource.getRepository(users_entity_1.User);
    const email = yield userRegistred.findBy({
        email: req.body.email
    });
    if (email.length > 0) {
        throw new AppError_1.AppError("E-mail já existente", 400);
    }
    next();
});
exports.verifyUserEmailExistsMiddleware = verifyUserEmailExistsMiddleware;
