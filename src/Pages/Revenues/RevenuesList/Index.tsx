import React from 'react';

import { Table } from '../../../components/Table/Index';
import { Revenue } from '../../../interfaces/Revenue';

interface IStudentsList {
    revenues: Revenue[],
    setRevenuePicked: (revenue: Revenue) => void
}

export function StudentsList({ revenues, setRevenuePicked }: IStudentsList) {

    function getStatusBadge(revenue: Revenue) {
        switch (revenue.status) {
            case 'Pendente':
                return 'secondary';
            case 'Atrasado':
                return 'danger';
            case 'Pago':
                return 'success'
        }
    }

    return (
        <Table headList={['Morador', 'Valor', 'Status', 'Data', '']} >
            <>
                {
                    revenues.map((revenue, index) => {
                        return (
                            <tr key={index}>
                                <td className='align-middle'>{revenue.resident.name}</td>
                                <td className='align-middle'>{revenue.value}</td>
                                <td className='align-middle'>
                                    <h5 className='m-0'>
                                        <span className={`badge bg-${getStatusBadge(revenue)} w-75`}> {revenue.status}</span>
                                    </h5>
                                </td>
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