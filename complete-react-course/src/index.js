import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// const header = <h1>Hello, world!</h1>;

// console.log(header);

// ReactDOM.render(header, document.getElementById('root'));

// let div=document.getElementById('root');
// div.append(App());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
