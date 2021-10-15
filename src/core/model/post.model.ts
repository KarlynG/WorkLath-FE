import { BaseEntity } from "./base.model";
export class Post extends BaseEntity {
    category = Category.Desarrolador;
    horario = Horario.Freelance;
    company = '';
    position = '';
    photoId? = 0;
    photo?:DocumentType;
    url = '';
    location  = '';
    description = '';
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
