export interface IApiQueryResult<T> {
    count: number;
    value: Array<T>;
}

export interface IBaseODataQuery {
    $orderby: string;
    $top: number;
    $skip?: number;
    $filter?: string;
    $search?: string;
} 
export interface IODataQuery extends IBaseODataQuery {
    $count: boolean;
    $expand?: string;
    $select?: string;
} 

export class BaseODataQuery implements IBaseODataQuery {
    public $orderby: string = "id desc";
    public $top: number = Number.parseFloat(process.env.VUE_APP_PAGE_SIZE as any) || 10;
    public $skip?: number;
    public $filter?: string;
    public $search?: string;
} 

export class ODataQuery extends BaseODataQuery implements IODataQuery {
    public $count: boolean = true;
    public $expand?: string;
    public $select?: string;
} 


