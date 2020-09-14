const {Schema, model} = require("mongoose");

const userSchema = new Schema({
	login: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	money: {
		type: Number,
		default: 50
	}
}, {versionKey: false});

module.exports = model("users", userSchema);
