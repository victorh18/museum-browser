import { IBaseError } from "./IBaseError";

export class DataNotFoundError extends Error implements IBaseError {
    cause: Error | null;
    url: string;
    serviceMessage: string;

    constructor(message: string, url: string, serviceMessage: string, internalError: Error | null ) {
        super(message);
        this.url = url;
        this.serviceMessage = serviceMessage;
        this.cause = internalError;
    }

}