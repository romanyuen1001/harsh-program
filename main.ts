import express from "express";
import {reformPayloadFormat} from "./breakup";

const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.static("public"));

app.listen(8080, () => console.log(`Server listening on port ${8080}`));

app.post("/", (req, res) => {
	const rawText = req.body;
	const data = JSON.parse(rawText);
	const result = reformPayloadFormat(data);
	console.log("===============================\nresult: ", result);
	res.send(result);
});

export default app;
