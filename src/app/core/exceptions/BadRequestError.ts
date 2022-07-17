import { NetworkError } from "./NetworkError";

export class BadRequestError extends NetworkError {
    errorCode: number;

    constructor(message: string, url: string, errorCode: number, internalError: Error | null) {
        super(message, url, internalError);
        Object.setPrototypeOf(this, BadRequestError.prototype);
        this.name = BadRequestError.name;
        this.errorCode = errorCode;
    }
}