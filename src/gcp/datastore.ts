import {Datastore} from "@google-cloud/datastore";
import {projectId} from '$gcp/config'

const client = new Datastore({projectId});
export type DSKey = string

export default client
