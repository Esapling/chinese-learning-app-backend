import dotenv from "dotenv";
import "dotenv/config";
import express from "express"
import {connectDB} from "./db.js";
import vocabRouter from "./routers/vocab.router.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/words", vocabRouter);


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    connectDB();
    console.log("https://localhost:3000");
    console.log("Server is running on port 3000");
});