import { BaseEntity } from "./base.model";
import { IDocument } from "./document.model";
export class User extends BaseEntity {
    fullName?: string = '';
    name: string = '';
    middleName?: string = '';
    lastName: string = '';
    secondLastName?: string;
    documentTypeValue: string = '';
    photoId?: number | null;
    photo?: IDocument;
    photoFileName?: string;
    userName: string = '';
    password: string = '';
    signature?:string;
}
