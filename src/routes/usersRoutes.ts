import express from "express";
import {
    getAllUsersController,
    getOneUserController,
    createUserController,
    updateUserController,
    deleteUserController
} from "../controllers/usersController";

const router = express.Router();

router.get("/", getAllUsersController);
router.post("/new", createUserController);
router.get("/:id", getOneUserController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;