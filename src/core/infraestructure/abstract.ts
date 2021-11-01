export interface IEntityOperationResult<T> {
    isSuccess: boolean;
    entity: T;
    errors: string[];
}

export class EntityOperationResult<T> implements IEntityOperationResult<T> {
    isSuccess: boolean = true;
    entity: T = {} as T;
    errors: string[] = [];
}