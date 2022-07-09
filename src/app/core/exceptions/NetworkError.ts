import { IBaseError } from "./IBaseError";

export class NetworkError extends Error implements IBaseError {
    requestUrl = "";
    cause: Error | null;

    constructor(message: string, url: string, internalError: Error | null = null) {
        super(message);
        this.requestUrl = url;
        this.cause = internalError;
    }
    
}