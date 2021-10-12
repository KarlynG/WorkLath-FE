import { BaseEntity } from "./base.model";

export class Document extends BaseEntity {
    fileName:string = '';
    originalName:string = '';
    contentType:string = '';

}