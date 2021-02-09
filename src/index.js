import express from "express";
import { join } from "path";
import { getDirname } from "./util/dirname.js";
import { router as labRouter } from "./lab-base.js";
import fs from "fs-extra";
const __dirname = join(getDirname(import.meta), "..");

const app = express();

fs.readdir(join(__dirname, "labs")).then((labs) => {
	labs.forEach((labDir) => {
		let path = join(__dirname, "labs", labDir);
		fs.readdir(path).then((repoFiles) => {
			if (repoFiles.includes("api")) {
				fs.readFile(join(path, "api/config.json"), "utf-8").then((text) => {
					let json = JSON.parse(text);
					import(join(path, "api", json.index));
				});
			}
		});
	});
});

app.use("/asset", express.static("assets"));

app.get("/", (_req, res) => {
	res.sendFile(join(__dirname, "/page/index.html"));
});

app.use("/lab", labRouter);

app.listen(process.env.PORT || 5000);
