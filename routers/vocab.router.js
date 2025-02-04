import exp from "constants";
import express from "express";
import { getAllVocabs , getOneWord} from "../controllers/vocab.controller.js";

const router = express.Router();


router.get("/", getAllVocabs);
router.get("/word", getOneWord);

export default router;