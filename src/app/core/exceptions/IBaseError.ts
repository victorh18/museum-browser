export interface IBaseError extends Error {
    cause: Error | null;
}