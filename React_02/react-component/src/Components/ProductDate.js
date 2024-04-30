import React from "react";

import  './ProductDate.css' ;
const ProductDate = ( props) => {
    const  month = props.date.toLocalString('en-Us' , {month : 'long '}) ;

    const  day = props.date.toLocalString('en-Us' , {day : '2-digit '}) ;

    const  year  = props.date.getFullYear() ;

    return (
        <div cla
    )


}