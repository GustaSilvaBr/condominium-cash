import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <Link to={'/dashboard'} className="navbar-brand text-dark text-white" >Caixa do Condomínio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link to={'/dashboard'} className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/revenues'} className="nav-link">Receitas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/expenses'} className="nav-link">Despesas</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Link to={'/residents'}>Moradores</Link>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}