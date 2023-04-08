import {IRevenue} from '../interfaces/Revenue';

export abstract class AbstractRevenue{
    constructor(){}

    abstract create(revenue: IRevenue): Promise<void>;
}