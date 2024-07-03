import './Comp.css'
function shani(props) {

    const day = props.day;

    const month = props.month;

    const year = props.year ;
    return (
        <p className="Compo">

            <span>  {day}  </span>

            <span>  {month}  </span>

            <span>  {year}  </span>
            
        </p>
    )

}

export default shani ; 