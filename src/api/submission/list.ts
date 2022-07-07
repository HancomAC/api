import Datastore, {DSKey} from "$gcp/datastore";
import Resp from "$types/response";
import {Submission} from "$types/submission";

export default async function ({limit, cursor, problemId, contestId, account} = {
    cursor: '',
    limit: 20,
    problemId: null,
    contestId: null,
    account: null,
}): Resp<{ data: Submission[], cursor?: DSKey }> {
    if (limit > 20) {
        return {
            error: 'limit is too large',
            code: 400
        }
    }

    const query = Datastore.createQuery('submission')

    if (cursor) query.start(cursor)
    query.order('submissionId', {descending: true})
    if (problemId) query.filter('problemId', problemId)
    if (contestId) query.filter('contestId', contestId)
    if (account) query.filter('account', account)
    query.limit(limit)

    const raw = await query.run()
    if (raw[0].length === 0) return {data: {data: []}}
    return {
        data: {
            data: raw[0],
            cursor: encodeURIComponent(raw[1]?.endCursor)
        }
    }
}
