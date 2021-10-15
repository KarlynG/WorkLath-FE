import { BaseService } from "./base.service";
import { Post } from "../model";

export class PostService extends BaseService<Post> {
    constructor(controller = 'Post') {
        super(controller)
    }
}
