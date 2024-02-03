import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LoginComponent} from './components/login/login.component';
import { NetflixIndex } from './components/netflix/netflix-index/netflix-index';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NasaComponent } from './components/nasa/nasa.component';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataBindingComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// test git commit
reportWebVitals();
