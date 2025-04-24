import express from "express";
import * as usersController from "./usersController";

const router = express.Router();

router.get("/", usersController.getAllUsers);
router.post("/new", usersController.createUser);
router.get("/:id", usersController.getOneUser);
router.put("/:id", usersController.updateUser);
router.delete("/", usersController.deleteUser);

export default router;