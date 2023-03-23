import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import { Root } from './Routes/Index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <Root />
    </BrowserRouter>
);

