import { Revenue } from '../interfaces/Revenue';
import { RevenueModel } from '../model/RevenueModel';

export class RevenueController {
    private model: RevenueModel;

    constructor() {
        this.model = new RevenueModel();
    }

    async addRevenue(revenue: Revenue): Promise<void> {
        await this.model.addRevenue(revenue);
    }
}