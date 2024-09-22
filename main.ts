import express from "express";
import {reformPayloadFormat} from "./breakup";
import axios from "axios";

// List of replicator URLs (you can modify these URLs as per your setup)
const replicators = [
    'http://localhost:3001/replicate',
	'http://localhost:3002/replicate'
];

// Function to call a specific replicator API
const callReplicator = async (url: string, body: any) => {
    try {
        return await axios.post(url, body, {
			headers: {'Content-Type': 'text/plain'}
		});
    } catch (error) {
        console.error(`Error posting to ${url}`, error);
        throw error;
    }
};

const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.static("public"));

app.listen(8080, () => console.log(`Server listening on port ${8080}`));

app.post("/", async (req, res) => {
	const rawText = req.body;
	const data = JSON.parse(rawText);
	const result = reformPayloadFormat(data);

	try {
		// Send each request to a different replicator
		const requests = result.map((item, index) => {
			const replicatorUrl = replicators[index % replicators.length]; // Distribute requests across replicators
			return callReplicator(replicatorUrl, item);
		});

		// Wait for all the requests to finish using Promise.all
		const resp = await Promise.all(requests);

		// Log the responses or handle them
		const final = resp.map((response, idx) => {
			console.log(`Response from replicator ${idx + 1}:`, response.data);
			return response.data;
		});

		// Send success response after all requests are completed
		return res.status(200).json({ message: "All API requests triggered successfully", ...final });

	} catch (error) {
		console.error("Error in parallel API calls", error);
		return res.status(500).json({ error: "Error in parallel API calls - Internal Server Error" });
	}

	console.log("===============================\nresult: ", result);
	res.send(result);
});

export default app;
