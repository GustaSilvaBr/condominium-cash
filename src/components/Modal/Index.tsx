import React, { ReactNode } from 'react';

interface ModalInterface {
    modalId: string,
    title: string,
    confirmationText: string,
    children: ReactNode,
}

export function Modal({ modalId, title, confirmationText, children }: ModalInterface) {
    return (
        <div className="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby={`${modalId}Label`} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`${modalId}Label`}>{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-primary">{confirmationText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}