import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App , {Shani} from './App';
import Myclass from './Myclass';
import Constructor from './Components/Constructor';
import Events from './Events/Event';
import Binding from './BindingEvent/Binding';
import Updating1 from './Updating1';

import ShouldComponent from './ShouldComponent/ShouldComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <ShouldComponent  City="Hydrabad"/>
    <div className=''>
        <Binding/>
    </div>

    <Updating1/>

    

    
    
    <Constructor/>
    <App/> 
    <Shani/> 
    <Myclass name = "Shani bhai" AGE = {24} />
    <Events/>

</>
);

