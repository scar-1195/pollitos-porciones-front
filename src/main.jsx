import React from 'react';
import ReactDOM from 'react-dom/client';
import { PollitosPorciones } from './PollitosPorciones';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PollitosPorciones />
  </React.StrictMode>,
);
