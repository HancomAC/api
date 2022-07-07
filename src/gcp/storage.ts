import {Storage} from "@google-cloud/storage";
import {projectId} from "./config";

const client = new Storage({projectId});

export default client;
export const SubmissionBucket = client.bucket("jungol-submission-data");
