import express, { raw, Response, Request } from "express";
import {parseData, reformPayloadFormat} from "./breakup";

const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.static("public"));

app.listen(8080, () => console.log(`Server listening on port ${8080}`));

app.post("/", (req: Request, res: Response) => {
	const rawText = req.body;

	const data = JSON.parse(rawText); // === data.ts
	// console.log(typeof data, ", ", data.length);
	// console.log('12312312', JSON.parse(data[0][0]));
	// const

	// "[[\"Request\",\"doDayEnd\"] --> \"

	//const arr = toArray(rawText)
	//const str = toString(arr)
	//console.log('@@@!!!!toString(arr): ', str);
	//console.log("Received raw text:", rawText);

	const result = reformPayloadFormat(data);
	// const result = JSON.parse(data[0][0]);
	console.log("===============================\nresult: ", result);
	res.send(result);
	// res.sendStatus(200);

});

export default app;
