const {Schema, model} = require("mongoose");

const dataSchema = new Schema({
	table: {
		type: String,
		required: true
	},
	count: Number,
	date: {
		type: Date,
		default: Date.now()
	}
}, {versionKey: false});

module.exports = model("datas", dataSchema);
