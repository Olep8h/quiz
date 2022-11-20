import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

function Result({ correct }) {
    return (
        <div className="result">
            <img src ="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt=""/>
            <h2>You have {correct} correct answers out of {questions.length} </h2>
            <a href="/">
                <button>Play again</button>
            </a>
        </div>
    );
}