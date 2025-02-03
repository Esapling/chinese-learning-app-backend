import exp from "constants";
import express from "express";
import { getAllVocabs } from "../controllers/vocab.controller.js";

const router = express.Router();


router.get("/", getAllVocabs);


export default router;