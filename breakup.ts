import { splitArrayExact } from "./splitArr";

const replicators = [
	"http://server1.com/api/trade",
	"http://server2.com/api/trade",
	"http://server3.com/api/trade",
	"http://server4.com/api/trade"
];

interface OneData {
	request: any;
	requestid: any;
	requesttime: any;
	returnto: any;
	message: any;
}

interface Data {
	request: any;
	requestid: any;
	requesttime: any;
	returnto: any;
	message: any[];
}

function parseMessage(message: any) {
	const messagesStr = message;
	const messageJson = JSON.parse(messagesStr[1]);
	const tradesUnsantized = JSON.parse(messageJson[2][1]);
	// ValDate and ValuationType
	const trimmedHeadersArr = [messageJson[0], messageJson[1]];

	let trades = [];
	let temp = [];
	for (let i = 0; i < tradesUnsantized.length; i++) {
		const item = tradesUnsantized[i];
		if (i % 2 === 0) {
			// Columns in Trades
			temp.push(item);
		} else {
			// Data in Trades
			temp.push(item);
			trades.push(temp);
			temp = [];
		}
	}

	const tradesSplitted = splitArrayExact(trades, 2); // TODO: change to 10
	const tradesDataArr = tradesSplitted.map((t) => {
		return ["Trades", ...t];
	});

	return tradesDataArr.map((t) => {
		return ["Message", [...trimmedHeadersArr, t]];
	});

}

function parseData(data: string): Data {
	const json = JSON.parse(data);
	let val = {} as Data;
	for (let i = 0; i < json.length; i++) {
		const arr = json[i];
		if (arr[0] === "Request") {
			val.request = arr;
		} else if (arr[0] === "RequestID") {
			val.requestid = arr;
		} else if (arr[0] === "RequestTime") {
			val.requesttime = arr;
		} else if (arr[0] === "ReturnTo") {
			val.returnto = arr;
		} else if (arr[0] === "Message") {
			val.message = parseMessage(arr);
		} else {
            console.log('No matching condition found!');
        }
	}
	return val;
}

export function reformPayloadFormat(payload: string[][]): string[][][]{
	const data = payload[0][0];
	const outputObject = parseData(data);

	const outputOneDataObject: OneData[] = outputObject.message.map((m) => {
		return {
			request: outputObject.request,
			requestid: outputObject.requestid,
			requesttime: outputObject.requesttime,
			returnto: outputObject.returnto,
			message: m,
		} as OneData;
	});

	const payloadOriginalArrays = outputOneDataObject.map((obj) => {
		return Object.values(obj);
	});


	const payloadEscapedArrays = payloadOriginalArrays.map((payloadArr) => {
		let test0: string, test1: string, test2: string, test3: string, test4;
		payloadArr.forEach((payload, jndex) => {
			if (jndex === 0) {
				test0 = JSON.stringify(payload);
			}
			if (jndex === 1) {
				test1 = JSON.stringify(payload);
			}
			if (jndex === 2) {
				test2 = JSON.stringify(payload);
			}
			if (jndex === 3) {
				test3 = JSON.stringify(payload);
			}
			if (jndex === 4){ // Message
				const valDate = payload[1][0];
				const valType = payload[1][1];

				const tradeBody = JSON.stringify(payload[1][2][1]);

				test4 = JSON.stringify([["Message", JSON.stringify([valDate, valType, ['Trades', tradeBody]])]]);
			}
		});
		const finalOutput =  `"[["[`+ test0 + "," + test1 + "," + test2 + "," + test3 + "," + test4 + `"]]"`;
		return finalOutput;
	});

	return payloadEscapedArrays;
}