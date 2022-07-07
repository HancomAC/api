import Datastore, {DSKey} from "../../gcp/datastore";
import Resp from "../../types/response";
import {Submission} from "../../types/submission";

export default async function ({cursor} = {cursor: ''}): Resp<{ data: Submission[], cursor?: DSKey }> {
    const query = Datastore.createQuery('submission')

    if (cursor) query.start(cursor)
    query.order('submissionId', {descending: true})
    query.limit(20)

    const raw = await query.run()
    if (raw[0].length === 0) return {data: {data: []}}
    return {
        data: {
            data: raw[0],
            cursor: encodeURIComponent(raw[1]?.endCursor)
        }
    }
}
