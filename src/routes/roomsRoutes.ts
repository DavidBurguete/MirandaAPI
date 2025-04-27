import express from "express";
import {
    getAllRoomsController,
    getOneRoomController,
    createRoomController,
    updateRoomController,
    deleteRoomController
} from "../controllers/roomsController";

const router = express.Router();

router.get("/", getAllRoomsController);
router.post("/new", createRoomController);
router.get("/:id", getOneRoomController);
router.put("/:id", updateRoomController);
router.delete("/:id", deleteRoomController);

export default router;