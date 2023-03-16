import {Resident} from './Resident';

export interface ResidentPayment{
    value: number,
    date: Date,
    resident: Resident
}