"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRoutes = void 0;
const express_1 = require("express");
const session_controller_1 = require("../controllers/sessions/session.controller");
exports.sessionRoutes = (0, express_1.Router)();
exports.sessionRoutes.post("", session_controller_1.createSessionController);
