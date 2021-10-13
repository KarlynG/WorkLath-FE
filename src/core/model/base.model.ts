export interface IBase {
    id?: number;
    deleted: boolean;
}
export interface IBaseEntity extends IBase {
    deletedDate?: string;
    createdDate?: string;
    updatedDate?: string;
    createdBy: string;
    deletedBy: string;
    updatedBy: string;
}

export class Base implements IBase {
    id?: number = 0;
    deleted: boolean = false;
}

export class BaseEntity extends Base implements IBaseEntity {
    deletedDate?: string;
    createdDate?: string;
    updatedDate?: string;
    createdBy: string = '';
    deletedBy: string = '';
    updatedBy: string = '';
}