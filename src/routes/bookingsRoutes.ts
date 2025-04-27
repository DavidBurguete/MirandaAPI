import express from "express";
import {
    getAllBookingsController,
    createBookingController,
    getOneBookingController,
    updateBookingController,
    deleteBookingController
} from "../controllers/bookingsController";

const router = express.Router();

router.get("/", getAllBookingsController);
router.post("/new", createBookingController);
router.get("/:id", getOneBookingController);
router.put("/:id", updateBookingController);
router.delete("/:id", deleteBookingController);

export default router;