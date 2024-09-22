export function splitArrayExact<T>(array: T[], n: number): T[][] {
	const totalLength = array.length;
	const baseChunkSize = Math.floor(totalLength / n);
	const remainder = totalLength % n; // The number of chunks that need to be one element larger

	const result: T[][] = [];
	let startIndex = 0;

	for (let i = 0; i < n; i++) {
		// Determine the size of the current chunk
		const chunkSize = baseChunkSize + (i < remainder ? 1 : 0);
		result.push(array.slice(startIndex, startIndex + chunkSize));
		startIndex += chunkSize;
	}

	return result;
}

// // Example usage:
// const largeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const n = 3; // Number of chunks
// const splitArrays = splitArrayExact(largeArray, n);

// console.log(splitArrays);
