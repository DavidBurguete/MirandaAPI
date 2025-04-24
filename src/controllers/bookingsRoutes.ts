import express from "express";
import * as bookingsController from "./bookingsController";

const router = express.Router();

router.get("/", bookingsController.getAllBookings);
router.post("/new", bookingsController.createBooking);
router.get("/:id", bookingsController.getOneBooking);
router.put("/:id", bookingsController.updateBooking);
router.delete("/", bookingsController.deleteBooking);

export default router;