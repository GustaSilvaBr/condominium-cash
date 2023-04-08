import { FormModal } from '../../../components/FormModal/Index';
import { IRevenue } from '../../../interfaces/Revenue';
import { DomUtils } from '../../../utils/DomUtils';
import { RevenueController } from '../../../controllers/RevenueController';

interface INewRevenueModal {
    modalId: string
}



const revenueController = new RevenueController();


export function NewRevenueModal({ modalId }: INewRevenueModal) {


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.target as HTMLFormElement;

        const revenueFromForm: any = DomUtils.getResponseObjectFromForm(form);

        const newRevenue: IRevenue = {
            date: revenueFromForm["date"],
            resident: revenueFromForm["resident"],
            value: revenueFromForm["value"]
        }

        handleAddRevenue(newRevenue);
        form.reset();
    }

    function handleAddRevenue(revenue: IRevenue){
        revenueController.create(revenue).then((response)=>{
            alert('Receita criada com sucesso');
        }).catch((err)=>{
            alert('Não foi possível inserir uma nova receita');
            console.error(err);
        })
    }

    return (
        <FormModal title='Nova Receita' modalId={modalId}>
            <form onSubmit={(e) => { handleSubmit(e) }} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Morador</label>
                    <select className="form-select" aria-label="Default select example" name="resident">
                        <option selected value="0">Selecione</option>
                        <option value="1">Otávio</option>
                        <option value="2">Fernando</option>
                        <option value="3">Augusto</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Data de pagamento</label>
                    <input type="date" className="form-control" id="exampleInputPassword1" name='date' />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Valor</label>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">R$</span>
                        <input name="value" type="text" className="form-control" placeholder="Ex: 30,00" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>

                <div className='text-end mt-4'>
                    <button className='btn btn-primary' type='submit'>Salvar</button>
                </div>
            </form>
        </FormModal>
    )
}