"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roomsController_1 = require("../controllers/roomsController");
const router = express_1.default.Router();
router.get("/", roomsController_1.getAllRoomsController);
router.post("/new", roomsController_1.createRoomController);
router.get("/:id", roomsController_1.getOneRoomController);
router.put("/:id", roomsController_1.updateRoomController);
router.delete("/:id", roomsController_1.deleteRoomController);
exports.default = router;
