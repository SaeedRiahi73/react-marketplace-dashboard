export interface IResultInfo<T> {
    isSuccess: boolean;
    status: number;
    message: string;
    data: T;
    errors: string[] | null;
}
