import React, { ReactNode } from 'react';

interface IFormModal {
    modalId: string,
    title: string,
    confirmationText: string,
    children: ReactNode,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export function FormModal({ modalId, title, confirmationText, children, handleSubmit }: IFormModal) {
    return (
        <div className="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby={`${modalId}Label`} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`${modalId}Label`}>{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={(e) => { handleSubmit(e) }}>
                            {children}

                            <div className="row justify-items-end">
                                <div className="col">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                    <button type="submit" className="btn btn-primary" >{confirmationText}</button>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                    <button type="submit" className="btn btn-primary" >{confirmationText}</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}