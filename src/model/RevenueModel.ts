import { collection, CollectionReference, DocumentData, addDoc } from 'firebase/firestore';
import { db } from '../config/firestore';
import { Revenue } from '../interfaces/Revenue';

export class RevenueModel {
    private revenueCollection: CollectionReference<DocumentData>;
    constructor() {
        this.revenueCollection = collection(db, "revenues");
    }

    async addRevenue(revenue: Revenue): Promise<void> {
        const docCreated = await addDoc(this.revenueCollection, revenue);
        
        if(!docCreated.id){
            throw 'Não foi possível inserir uma nova receita'
        }
    }
}

