import React, { useEffect, useState } from 'react';

interface ITable {
    headList: string[]
    children: JSX.Element,
}

export function Table({ headList, children }: ITable) {

    return (
        <table className="table my-4">
            <thead className="table-dark">
                <tr>
                    {headList.map((head, index) => {
                        return (
                            <th scope="col" key={index}>{head}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}