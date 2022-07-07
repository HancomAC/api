type Resp<T> = Promise<ResponseSuccess<T> | ResponseError<T>>;

type ResponseSuccess<T> = {
    error?: null
    data: T
}

type ResponseError<T> = {
    error: string
    data: null
}

export default Resp;
