import { IBaseEntity } from "./base.model";

export interface IDocument extends IBaseEntity {
    fileName: string;
    originalName: string;
    contentType: string;
}