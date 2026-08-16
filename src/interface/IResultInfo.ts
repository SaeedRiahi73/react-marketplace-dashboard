export interface IResultInfo<T> {
    data: T;
    isSuccess: boolean;
    message?: string;
    errors?: string[];
}