import Datastore from "$gcp/datastore";
import {error} from "$util/log";

export async function get(problemId: string) {
    try {
        const data = (await Datastore.get(Datastore.key(['problem', problemId])))?.[0]
        if (!data) throw new Error('Problem Not Found')
        return {data}
    } catch (e) {
        error(e)
        return {
            error: e.toString(),
            code: 500
        }
    }
}
