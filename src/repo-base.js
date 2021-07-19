import express from "express";

export const router = express.Router();
router.get("/", (req, res) => {
	res.status(400).json({
		error: "Please specify a lab id. (api.seattleowl.com/lab/xxx)"
	});
});

export class Repo {
	static instance;
	app = null;

	connect() {
		throw new TypeError(
			"Trying to regester a class without a 'connect' method."
		);
	}

	static regester(subdomain) {
		if (this.instance)
			throw new Error("Trying to regester a already regestered class.");
		this.instance = new this();
		this.instance.app = express.Router();
		this.instance.connect();
		router.use(`/${subdomain}`, this.instance.app);
	}
}
