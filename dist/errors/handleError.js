"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const AppError_1 = require("./AppError");
const handleError = (error, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => {
    if (error instanceof AppError_1.AppError) {
        console.log(error);
        return res.status(error.statusCode).json({
            message: error.message,
        });
    }
    console.log(error);
    return res.status(500).json({
        message: "Internal server error",
    });
};
exports.handleError = handleError;
