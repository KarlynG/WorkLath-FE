import { BaseService } from "./base.service";
import { Job } from "../model";

export class JobService extends BaseService<Job> {
    constructor(controller = 'Job') {
        super(controller)
    }
}
