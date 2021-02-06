import express from "express";
import path from "path";
import { getDirname } from "./src/util/dirname.js";
const __dirname = getDirname(import.meta);

const app = express();

app.use("/assets", express.static("assets"));

app.get("/", (_req, res) => {
	res.sendFile(path.join(__dirname, "page/index.html"));
});

app.listen(process.env.PORT || 5000);
