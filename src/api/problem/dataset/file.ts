import Datastore from "$util/gcp/datastore";
import {error} from "$util/log";

export async function get(problemId: string) {
    const data = (await Datastore.get(Datastore.key(['judge_data_config', problemId])))?.[0]
    if (!data) return {
        error: `Problem ${problemId} not found`,
        code: 404
    }
    return {data}
}
