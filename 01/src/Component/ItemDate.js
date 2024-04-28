import './ItemDate.css'

function SecComponent(props) {

    const date = props.date;

    const month = props.month ;

    const year =  props.year;


    return (
    <div className="SecComponent">


     <span> {date} </span>

     <span>  {month} </span>

     <span>  {year} </span>



    </div>
       
    )
}
export default SecComponent;