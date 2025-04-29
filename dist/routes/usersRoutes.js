"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersController_1 = require("../controllers/usersController");
const router = express_1.default.Router();
router.get("/", usersController_1.getAllUsersController);
router.post("/new", usersController_1.createUserController);
router.get("/:id", usersController_1.getOneUserController);
router.put("/:id", usersController_1.updateUserController);
router.delete("/:id", usersController_1.deleteUserController);
exports.default = router;
