import axios from "axios";

export async function parallelCallApi<T, P>(arr: T[], fn: () => P, MAX_CONCURRENCY = 10){
	const executing: Promise<P>[] = [];

    async function runTask<Q>(arg: Q) {
		try {
            await fn(arg);
		} catch (error) {
			console.log(`Failed to process, arg: ${arg}`, error);
		}
	}

    if (executing.length >= MAX_CONCURRENCY) {
        await Promise.race(executing);
        executing.splice(
            executing.findIndex((p) => p === task),
            1
        );
    }

    await Promise.all(executing);
}

const callInternalApi = async(body: any) => {
    return axios.post(body)
}

await parallelCallApi(splittedArray, callInternalApi);