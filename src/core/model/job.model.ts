import { Post } from ".";
import { BaseEntity } from "./base.model";

export class Job extends BaseEntity {
    name = '';
    posts?:Post[];
}