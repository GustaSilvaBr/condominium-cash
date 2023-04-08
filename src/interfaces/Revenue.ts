import {Resident} from './Resident';

export interface Revenue{
    value: number,
    date: Date,
    resident: Resident,
}