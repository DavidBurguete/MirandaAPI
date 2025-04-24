import express from "express";
import * as roomsController from "./roomsController";

const router = express.Router();

router.get("/", roomsController.getAllRooms);
router.post("/new", roomsController.createRoom);
router.get("/:id", roomsController.getOneRoom);
router.put("/:id", roomsController.updateRoom);
router.delete("/", roomsController.deleteRoom);

export default router;