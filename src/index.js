import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';
import './styles/styles.scss';

ReactDOM.render(<App />, document.getElementById("app"));
=======
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
// or send to an analytics endpoint. Learn more: https://create-react-app.dev/docs/measuring-performance/
reportWebVitals();
>>>>>>> 34388a3b2402252b350b4b886f3379f84ce2f389
