import { collection, CollectionReference, DocumentData, addDoc } from 'firebase/firestore';
import { db } from '../config/firestore';
import { IRevenue } from '../interfaces/Revenue';
import {AbstractRevenue} from '../abstracts/AbstractRevenue';

export class RevenueModel extends AbstractRevenue{
    private revenueCollection: CollectionReference<DocumentData>;

    constructor() {
        super();
        this.revenueCollection = collection(db, "revenues");
    }

    async create(revenue: IRevenue): Promise<void> {
        const docCreated = await addDoc(this.revenueCollection, revenue);
        
        if(docCreated.id){
            throw Error()
        }
    }
}

