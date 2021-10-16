import { IDocument } from ".";
import { BaseEntity } from "./base.model";
export class Post extends BaseEntity {
    category = Category.Desarrolador;
    horario = Horario.Freelance;
    companyName = '';
    position = '';
    photoId? = 0;
    photo?:IDocument;
    photoFileName?: string;
    url = '';
    location  = '';
    description = '';
    jobId = 0;
}

export enum Category{
    Desarrolador = 1,
    Medicina,
    Tecnologia
}

export enum Horario {
    FullTime = 1,
    PartTime,
    Freelance
}
