"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const login = (req, res) => {
    const { username, password } = req.body;
    console.log(req);
    console.log(req.body);
    if (username === "" || password === "") {
        res.status(400).send("Please, complete all the fields");
    }
    if (username !== "admin" || password !== "admin") {
        res.status(401).send({ message: "Either the user or the password is not correct", username: username, password: password });
    }
    const token = jsonwebtoken_1.default.sign({ username }, process.env.SECRET_KEY, {
        expiresIn: '1h',
    });
    res.status(200).send({ message: "User Logged", token: token });
};
exports.login = login;
