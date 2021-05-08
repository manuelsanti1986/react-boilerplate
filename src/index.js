import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import ComponentOne from './components/ComponentOne';
import './styles/styles.scss';

ReactDOM.render(
    <React.StrictMode>
        <ComponentOne />
    </React.StrictMode>,
    document.getElementById("app"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
