import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { HelloWordApp } from './HelloWordApp';


import './styles.css'




ReactDOM.createRoot(document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <HelloWordApp /> */}
        {/* <FirstApp title="Hola, soy Goku" subTitle= { 123 }/> */}
        {/* <FirstApp/>  */}
        <CounterApp value= {20}/>

    </React.StrictMode>
);


