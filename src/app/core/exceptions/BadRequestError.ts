import { NetworkError } from "./NetworkError";

export class BadRequestError extends NetworkError {
    errorCode: number;

    constructor(message: string, url: string, errorCode: number, internalError: Error | null) {
        super(message, url, internalError);
        this.errorCode = errorCode;
    }
}