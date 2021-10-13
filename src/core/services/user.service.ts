import { BaseService } from "./base.service";
import {  User } from "../model";

export class UserService extends BaseService<User> {
    constructor(controller = 'Users') {
        super(controller)
    }
}
