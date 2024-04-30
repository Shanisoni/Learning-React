import React from "react";

import  './ProductDate.css' ;
const ProductDate = ( props) => {
    const  month = props.date.toLocalString('en-Us' , {month : 'long '}) ;

    const  day = props.date.toLocalString('en-Us' , {day : '2-digit '}) ;

    const  year  = props.date.getFullYear() ;

    return (
        <div className="product-date">
            <div className="product-date__month" >{month}</div>

            <div className="product-date__year" >{year}</div>

            <div className="product-date__day" >{day}</div>

        </div>
    );


};

export default ProductDate;