import { UserRole } from "../utils/enums";
import { BaseEntity } from "./base.model";
import { Document } from "./document.model";

export class User extends BaseEntity{
    role:UserRole = 0;
    name:string = '';
    lastName:string = '';
    birthDate:Date = new Date();
    email:string = '';
    photoId?:number;
    photo?:Document | undefined;
    userName:string = '';
    password:string = '';

}