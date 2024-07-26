import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App , {Shani} from './App';
import Myclass from './Myclass';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
<App/> <Shani/> 
<Myclass name = "Shani bhai" AGE = {24} />

</>
);

