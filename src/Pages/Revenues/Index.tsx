import React, { useState } from 'react';

import { PageContainer } from '../../components/PageContainer/Index';
import { Revenue } from '../../interfaces/Revenue';
import { StudentsList } from './RevenuesList/Index';
import { revenues } from '../../data/revenues';
import { BtnOpenModal } from '../../components/BtnOpenModal/Index';
import { FormModal } from '../../components/FormModal/Index';

export function Revenues() {
    const [revenuePicker, setRevenuePicked] = useState<Revenue>();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert('inserted');
    }

    return (
        <PageContainer >
            <>
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
                <FormModal title='Nova Receita' confirmationText='Inserir' modalId='newRevenue' handleSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Morador</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Felipe</option>
                            <option value="1">Otávio</option>
                            <option value="2">Fernando</option>
                            <option value="3">Augusto</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Data de pagamento</label>
                        <input type="date" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Valor</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">R$</span>
                            <input type="text" className="form-control" placeholder="Ex: 30,00" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                    </div>
                </FormModal>
                <StudentsList setRevenuePicked={setRevenuePicked} revenues={revenues} />
            </>
        </PageContainer>
    )
}