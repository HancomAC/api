type Resp<T> = Promise<ResponseSuccess<T> | ResponseError<T>>;

type ResponseSuccess<T> = {
    data: T
}

type ResponseError<T> = {
    error: string
    code: number
    data?: null
}

export default Resp;
