import { BaseEntity } from "./base.model";
export class Job extends BaseEntity {
    category:Category = Category.Desarrolador;
    Horario:Horario = Horario.Freelance;
    company:string = '';
    photoId?:number = 0;
    photo?:DocumentType;
    url:string = '';
    location:string = '';
    description:string = '';
}

export enum Category{
    Desarrolador,
    Medicina,
    Tecnologia
}

export enum Horario {
    FullTime,
    PartTime,
    Freelance
}
