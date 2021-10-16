import { BaseEntity } from "./base.model";
import { IDocument } from "./document.model";
export class Users extends BaseEntity {
    role = 0;
    name = '';
    lastName = '';
    birthDate = new Date();
    email = '';
    userName = '';
    password = '';
}
