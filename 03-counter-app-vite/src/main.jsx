import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirsApp } from './FirstApp';
import { HelloWordApp } from './HelloWordApp';


import './styles.css'




ReactDOM.createRoot(document.getElementById('root') ).render(
    <React.StrictMode>
        <HelloWordApp />
        <FirsApp title="Hola, soy Goku" subTitle= { 123 }/>
        <FirsApp/>
        <CounterApp value= {20}/>

    </React.StrictMode>
);


