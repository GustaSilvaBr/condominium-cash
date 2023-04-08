import React from 'react';

import { Table } from '../../../components/Table/Index';
import { IRevenue } from '../../../interfaces/Revenue';

interface IStudentsList {
    revenues: IRevenue[],
    setRevenuePicked: (revenue: IRevenue) => void
}

export function StudentsList({ revenues, setRevenuePicked }: IStudentsList) {

    return (
        <Table headList={['Morador', 'Valor', 'Data', '']} >
            <>
                {
                    revenues.map((revenue, index) => {
                        return (
                            <tr key={index}>
                                <td className='align-middle'>{revenue.resident.name}</td>
                                <td className='align-middle'>{revenue.value}</td>
                                <td className='align-middle'>{revenue.date.toLocaleDateString('pt-BR')}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm" onClick={() => { setRevenuePicked(revenue) }}>Atualizar</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </>
        </Table>
    )
}