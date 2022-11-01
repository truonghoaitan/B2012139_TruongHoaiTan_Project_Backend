const express = require("express");
const cors = require("cors");

const librariesRouter = require("./app/routes/library.route");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
	res.json({message: "Wellcome to Rho Library application."});
} );

app.use("/api/libraries", librariesRouter);

module.exports = app;
