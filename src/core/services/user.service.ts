import { BaseService, IBaseService } from "./base.service";
import {  User } from "../models/user.model";

export interface IUserService extends IBaseService<User> {
}

export class UserService extends BaseService<User> implements IUserService {

    constructor(controller: string = 'User') {
        super(controller)
    }
}
