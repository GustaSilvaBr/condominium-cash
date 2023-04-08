import { IRevenue } from '../interfaces/Revenue';
import {AbstractRevenue} from '../abstracts/AbstractRevenue';
import { RevenueModel } from '../models/RevenueModel';

export class RevenueController extends AbstractRevenue{
    private model: RevenueModel;

    constructor() {
        super();
        this.model = new RevenueModel();
    }

    async create(revenue: IRevenue): Promise<void> {
        await this.model.create(revenue);
    }
}