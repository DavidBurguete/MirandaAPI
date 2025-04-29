"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingsController_1 = require("../controllers/bookingsController");
const router = express_1.default.Router();
router.get("/", bookingsController_1.getAllBookingsController);
router.post("/new", bookingsController_1.createBookingController);
router.get("/:id", bookingsController_1.getOneBookingController);
router.put("/:id", bookingsController_1.updateBookingController);
router.delete("/:id", bookingsController_1.deleteBookingController);
exports.default = router;
