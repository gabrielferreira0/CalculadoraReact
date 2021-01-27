import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Main/Calculator';
import './index.css'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <h1>Calculadora</h1>
        <Calculator/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
