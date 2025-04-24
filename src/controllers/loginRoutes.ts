import express from "express";
import * as loginController from "./loginController";
import { authentication } from "../middleware/authentication";

const router = express.Router();

router.post("/", authentication, loginController.login);

export default router;