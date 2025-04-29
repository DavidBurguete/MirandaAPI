"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const authenticateToken = (req, res, next) => {
    const authorization = req.headers.authorization;
    const token = authorization && authorization.split(" ")[1];
    if (!token) {
        res.status(404).json({ message: 'Token not found' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        next();
    }
    catch (error) {
        res.status(403).json({ message: 'Token not valid' });
    }
};
exports.authenticateToken = authenticateToken;
