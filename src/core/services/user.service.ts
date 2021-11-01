import { BaseService } from "./base.service";
import {  AuthenticateRequest, Users } from "../model";
import axios from "axios";

export class UserService extends BaseService<Users> {
    constructor(controller = 'Users') {
        super(controller)
    }

    public async authenticateUser(model: AuthenticateRequest) {
        const url = `${this.apiUrl}authenticate`;
        const response = await axios.post<AuthenticateRequest>(url, model)
        return response;
    }
}
