import Storage, {SubmissionBucket} from "$util/gcp/storage";
import Resp from "$types/response";
import {SubmissionRecord} from "$types/submission";

export default async function (submissionId: number): Resp<SubmissionRecord> {
    try {
        const file = SubmissionBucket.file(`${submissionId}.json`);
        const data = await file.download();
        return {data: JSON.parse(data.toString())}
    } catch (e) {
        return {
            error: e.message,
            code: 404
        }
    }
}
