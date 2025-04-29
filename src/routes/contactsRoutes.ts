import express from "express";
import {
    getAllContactsController,
    updateContactController
} from "../controllers/contactsController";

const router = express.Router();

router.get("/", getAllContactsController);
router.put("/:id", updateContactController);

export default router;