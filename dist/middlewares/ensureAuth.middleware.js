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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv");
const AppError_1 = require("../errors/AppError");
const ensureAuthMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "Invalid token",
        });
    }
    token = token.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            throw new AppError_1.AppError(error.message, 401);
        }
        const payload = decoded;
        req.user = {
            id: payload.sub,
            token: String(token),
        };
        return next();
    });
});
exports.ensureAuthMiddleware = ensureAuthMiddleware;
