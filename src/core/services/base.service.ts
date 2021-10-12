import axios, { AxiosResponse } from "axios";
import settings from "@/core/utils/app-settings";
import { ODataQuery, IODataQuery, IApiQueryResult } from "../infraestructure/odata";
import { IEntityOperationResult } from "../infraestructure/abstract";

export interface IBaseService<T> {
    getAll(action: string, queryOption?: IODataQuery): Promise<AxiosResponse<IApiQueryResult<T>>>;
    getById(id: string | number): Promise<AxiosResponse<T>>;
    delete(id: string | number): Promise<AxiosResponse<IEntityOperationResult<T>>>
}
export class BaseService<T> implements IBaseService<T> {
    public apiUrl: string;
    public odataUrl: string;
    public controller: string;
    constructor(controller: string) {
        this.controller = controller;
        this.apiUrl = settings.API_URL + "api/" + controller + "/";
        this.odataUrl = settings.API_URL + "odata/" + controller + "/";
    }

    public setODataQuery(odataQuery?: IODataQuery) {
        odataQuery = odataQuery || new ODataQuery();
        if (!odataQuery.$skip) delete odataQuery.$skip;
        if (!odataQuery.$filter) delete odataQuery.$filter;
        if (!odataQuery.$expand) delete odataQuery.$expand;
        if (!odataQuery.$select) delete odataQuery.$select;
        return odataQuery;
    }

    public async getAll(action = '', queryOption?: ODataQuery) {
        const params = this.setODataQuery(queryOption);
        const url = action ? `${this.apiUrl}${action}` : `${this.apiUrl}query`;
        const response = await axios.get<IApiQueryResult<T>>(url, { params });
        return response;
    }

    public async getById(id: string | number) {
        const response = await axios.get<T>(this.apiUrl + id);
        return response;
    }

    public async delete(id: string | number) {
        const response = await axios.delete<IEntityOperationResult<T>>(this.apiUrl + id);
        return response;
    }
}
