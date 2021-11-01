import { BaseService } from "./base.service";
import { Post } from "../model";
import axios from "axios";

export class PostService extends BaseService<Post> {
    constructor(controller = 'Post') {
        super(controller)
    }

    public async getPostByJobId(jobId:number) {
        const url = `${this.apiUrl}PostByJobId/${jobId}`;
        const response = await axios.get<Post[]>(url)
        return response;
    }
}
