import express from "express";
import { login, loginWithToken } from "../controllers/loginController";

const router = express.Router();

router.post("/", login);
router.post("/withToken", loginWithToken);

export default router;