import React from 'react';

import { Sidebar } from './components/Sidebar/Index';
import { BtnOpenModal } from './components/BtnOpenModal/Index';
import { Modal } from './components/Modal/Index';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="p-3">

        <h1 className='h4 mb-4'>Pagamentos de moradores</h1>
        <hr />



        <div className='row m-0'>

          <div className="col-4 p-0">
            <BtnOpenModal modalId='storePaymentId' title='Registrar pagamento' />

            <Modal title='Registrar pagamento' confirmationText='Registrar' modalId='storePaymentId'>
              campos para preencher
            </Modal>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
