import React from 'react';

interface BtnOpenModalInterface {
    title: string,
    modalId: string
}

export function BtnOpenModal({ title, modalId }: BtnOpenModalInterface) {
    return (
        <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
            {title}
        </button>
    )
}