import { payload } from "./data";
import { splitArrayExact } from "./splitArr";

const replicators = [
	"http://server1.com/api/trade",
	"http://server2.com/api/trade",
	"http://server3.com/api/trade",
	"http://server4.com/api/trade"
];

const specialCharRegex = /[\\\"'\/\b\f\n\r\t]/g;

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
	// console.log('@@@@@@!!!!!!!!!!!!!! parseMessage', message);
	const messagesStr = message;
	const messageJson = JSON.parse(messagesStr[1]);
	// console.log('@@@@@!!!!!!messageJson: ')
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
			// data in Trades
			temp.push(item);
			trades.push(temp);
			temp = [];
		}
	}

	const tradesSplitted = splitArrayExact(trades, 2); // TODO: change to 10
	// console.log('@@@@@@@@@@@@@@!!!!!!!!!!!!')
	// console.log(tradesSplitted);
	const tradesDataArr = tradesSplitted.map((t) => {
		return ["Trades", ...t];
	});
	//console.log('@!!!!!!!!!!!!')
	//console.log(tradesDataArr);

	return tradesDataArr.map((t) => {
		return ["Message", [...trimmedHeadersArr, t]];
	});

}



function parseData(data: string): Data {

	// console.log("@@@!!!parseData", data);
	const json = JSON.parse(data);
	// console.log(json);
	// console.log('3333$$$@@@@@@@&&&&!!!!!!!!!!!arr2222:', json);

	let val = {} as Data;
	for (let i = 0; i < json.length; i++) {
		const arr = json[i];
		// console.log('$$$@@@@@@@&&&&!!!!!!!!!!!arr2222:', arr[0]);
		if (arr[0] === "Request") {
			val.request = arr;
			// console.log('val.request:', val.request);
		} else if (arr[0] === "RequestID") {
			val.requestid = arr;
		} else if (arr[0] === "RequestTime") {
			val.requesttime = arr;
			// console.log('val.requesttime: ', val.requesttime);
		} else if (arr[0] === "ReturnTo") {
			val.returnto = arr;
			// console.log('val.returnto: ', val.returnto);
		} else if (arr[0] === "Message") {
			val.message = parseMessage(arr);
		} else {
            console.log('No matching condition found!');
        }
	}
	// console.log('Parsed data object:', val);
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

	//console.log('outputOneDataObject: ' + outputOneDataObject.length);
	//console.log(Object.values(outputOneDataObject[0]));

	const payloadOriginalArrays = outputOneDataObject.map((obj) => {
		return Object.values(obj);
	});

	//console.log('payloadOriginalArrays'); // 2
	//console.log(payloadOriginalArrays); // spliced as 2

	const payloadEscapedArrays = payloadOriginalArrays.map((payloadArr) => {
		let test0: string, test1: string, test2: string, test3: string, test4;
		// what we can do is this:
		// The first part of the string is just pure simple, Request, RequestID,
		// etc doesn't really needs to be change. But we will need to rip away the final part of
		// the string becoz reasons below.
		// The second part is the ValDate until the trade body. Those need \\
		// The third part is the evil Trade body. Those need \\\\\\
		// The fourth part is the closing brackets. They can be HARD CODED.
		// i,e. \\"]]"]]

		//The output would be [[ str1 + str2 + str3 + str4 ]]


		payloadArr.forEach((payload, jndex) => {
			// console.log("payload", payload, "jndex", jndex);
			// console.log("JSON.stringify", JSON.stringify(payload));

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

				// const finalOutput = [["["+test0 + "," + test1 + "," + test2 + "," + test3 + "," + test4+"]"]];
				// console.log("finalOutput: " + index, JSON.stringify(finalOutput));

				// return JSON.stringify(finalOutput);
			}
		});
// "\"
		const finalOutput =  `"[["[`+ test0 + "," + test1 + "," + test2 + "," + test3 + "," + test4 + `"]]"`;
		return finalOutput;

	});

	console.log(payloadEscapedArrays);
	// console.log(payloadOriginalArrays[0].length)

	return payloadEscapedArrays;
}

// const outputArray = reformPayloadFormat(payload)
// console.log(JSON.stringify(outputArray[0]));
// console.log('!!!!@@@@ outputArray[1]')
// console.log(outputArray[1]);
// console.log(outputArray.length);
