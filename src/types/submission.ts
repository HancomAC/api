import {Language, Reason, SourceFile, Time} from "$types/util";

interface Additional {
    account?: string
    time?: number
    sca?: string
    contestId?: number
    closed?: boolean
}

export interface Submission {
    submissionId: number;
    time: Time;
    account: string;
    contestId: null | number;
    language: Language;
    m_reason: Reason;
    m_score: number;
    m_time: number;
    m_memory: number;
    problemId: number;
}

interface SubmissionDetail {
    score: number
    reason: Reason[]
    result: (number[] | number)[]
    time: number[]
    memory: number[]
    example?: {
        input: string
        output: string
        solution: string
        case: number
        no: number
    }
    message?: string
    source: SourceFile[]
    additional?: Additional
    size: number
}

export type SubmissionRecord = SubmissionDetail & Submission;

