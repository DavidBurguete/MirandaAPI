import express from "express";
import {
    postNewContactController
} from "../controllers/contactsController";

const router = express.Router();

router.post("/", postNewContactController);

export default router;