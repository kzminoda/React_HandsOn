import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const element = (
        <p>Date & Time: {new Date().toString()}</p>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(App, 1000);