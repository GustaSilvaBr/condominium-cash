import React, { useState } from 'react';

import { PageContainer } from '../../components/PageContainer/Index';
import { Revenue } from '../../interfaces/Revenue';
import { StudentsList } from './RevenuesList/Index';
import {revenues} from '../../data/revenues';

export function Revenues() {
    const [revenuePicker, setRevenuePicked] = useState<Revenue>();


    return (
        <PageContainer >
            <>
                <div className="row justify-content-between align-items-center align-content-center">
                    <div className="col-4">
                        <h1 className='p-0 m-0'>Receitas</h1>
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

                <StudentsList setRevenuePicked={setRevenuePicked} revenues={revenues}/>
            </>
        </PageContainer>
    )
}