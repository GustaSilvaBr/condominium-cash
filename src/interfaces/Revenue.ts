import {IResident} from './Resident';

export interface IRevenue{
    value: number,
    date: Date,
    resident: IResident,
}