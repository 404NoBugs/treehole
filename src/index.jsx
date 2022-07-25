import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./header";
import Content from "./content";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
    return (
        <>
            <Header></Header>
            <Content></Content>
        </>
    );
};
root.render(
    <App></App>

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
