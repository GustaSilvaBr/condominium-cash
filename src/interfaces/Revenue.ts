import {Resident} from './Resident';

export interface Revenue{
    value: number,
    date: number | '',
    resident: Resident,
    status: 'Pago' | 'Pendente' | 'Atrasado',
}