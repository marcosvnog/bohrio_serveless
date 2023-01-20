const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
	res.send({
		author: "Marcos Vinicius Nogueira Moura",
		contact: "<marcosvnogsl@gmail.com>",
		version: "v0.1.0",
		description: "Testing...",
		driver: "NodeJS",
	}).status(200);
})

server.on("listening", () => console.log("API running on port 4000"));

server.listen(PORT);
