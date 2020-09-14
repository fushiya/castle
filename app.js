const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const PORT = process.env.PORT || config.get("port");
const Routes = require("./routes");
const app = express();

app.use(express.json({extended: true}));
app.use("/admin", Routes.admin);

async function start() {
	try {
		await mongoose.connect(config.get("mongoUrl"), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		});
	} catch (e) {
		console.log("SERVER ERROR:", e.message);
		process.exit(1);
	}
}

start();

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
