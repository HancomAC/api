import Storage, {SubmissionBucket} from "../../gcp/storage";
import Resp from "../../types/response";
import {SubmissionRecord} from "../../types/submission";

export default async function (submissionId: number): Resp<SubmissionRecord> {
    const file = SubmissionBucket.file(`${submissionId}.json`);
    const data = await file.download();
    return JSON.parse(data.toString())
}
