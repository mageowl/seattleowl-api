import express from "express";
import path from "path";
import { getDirname } from "./util/dirname.js";
import { router as labRouter } from "./lab-base.js";
const __dirname = getDirname(import.meta);

const app = express();

app.use("/assets", express.static("assets"));

app.get("/", (_req, res) => {
	res.sendFile(path.join(__dirname, "../page/index.html"));
});

app.use("/lab", labRouter);

app.listen(process.env.PORT || 5000);
