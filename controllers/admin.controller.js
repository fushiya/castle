const {Router} = require("express");
const mongoose = require("mongoose");
const db = require("../db");
const handleError = require("./__errors__");
const router = Router();

router.get("/", async (req, res) => {
    try {
	const collections = await Object.keys(mongoose.connection.collections);
	return res.status(200).json({collections});
    } catch (e) {handleError(e, req, res)}
});

router.post("/documents/read", async (req,res) => {
    try {
	const {currentCollection} = req.body;

	const documents = await db[currentCollection].find();
	return res.status(200).json({documents});
    } catch (e) {handleError(e, req, res)}
});

router.post("/documents/create", async (req, res) => {
    try {
	const {currentCollection, newDocument} = req.body;

	const candidate = new db[currentCollection](newDocument);
	await candidate.save();

	return res.status(200).json({message: "Created was done", done: true});
    } catch (e) {handleError(e,req,res)}
});

module.exports = router;
