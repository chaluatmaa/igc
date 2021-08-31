const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");
const auth = require("./routes/auth");
const post = require("./routes/post");
const User = require("./models/user");

app.use(express.json());
app.use(cors());
app.use("/", auth);
app.use("/post", post);
mongoose.connect(MONGOURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
	console.log("connected to mongo db !!");
});

app.get("/", (req, res) => {
	res.send("Home Page Again");
});

app.listen(PORT, () => {
	console.log(`Listening on Port ${PORT}`);
});
