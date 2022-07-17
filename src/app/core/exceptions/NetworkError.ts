export class NetworkError extends Error {
    override message = "";
    requestUrl = "";
    cause: Error | null;

    constructor(message: string, url: string, internalError: Error | null = null) {
        super(message);
        Object.setPrototypeOf(this, NetworkError.prototype);
        this.message = message;
        this.name = NetworkError.name;
        this.requestUrl = url;
        this.cause = internalError;
    }
    
}