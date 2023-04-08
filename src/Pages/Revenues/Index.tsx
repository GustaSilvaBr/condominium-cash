import React, { useState } from 'react';

import { PageContainer } from '../../components/PageContainer/Index';
import { IRevenue } from '../../interfaces/Revenue';
import { StudentsList } from './RevenuesList/Index';
import { revenues } from '../../data/revenues';
import { BtnOpenModal } from '../../components/BtnOpenModal/Index';
import { NewRevenueModal } from './NewRevenueModal/Index';

export function Revenues() {
    const [revenuePicker, setRevenuePicked] = useState<IRevenue>();



    return (
        <PageContainer >
            <div className='revenues-page'>

                <div className="row justify-content-between align-items-center align-content-center">
                    <div className="col-4">
                        <h1 className='h2 p-0 m-0'>Receitas</h1>
                    </div>
                    <div className="col-6">
                        <div className="input-group input-group-md">
                            <span className="input-group-text" id="basic-addon1">Mês:</span>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Maio (Atual)</option>
                                <option value="1">Junho</option>
                                <option value="2">Julho</option>
                                <option value="3">Agosto</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='row mt-5 justify-content-between'>
                    <div className='col'>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">Pesquisar</span>
                            <input type="text" className="form-control" placeholder="Ex: João Silva" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="col-3">
                        <BtnOpenModal modalId='newRevenue' title='Nova receita' />
                    </div>
                </div>

                <NewRevenueModal modalId='newRevenue'/>
               
                <StudentsList setRevenuePicked={setRevenuePicked} revenues={revenues} />
            </div>

        </PageContainer>
    )
}