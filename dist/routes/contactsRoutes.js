"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactsController_1 = require("../controllers/contactsController");
const router = express_1.default.Router();
router.get("/", contactsController_1.getAllContactsController);
router.put("/:id", contactsController_1.updateContactController);
exports.default = router;
