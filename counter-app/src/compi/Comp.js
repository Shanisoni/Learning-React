import './Compo.css'
function Sunny (props) {

    const Itemname = props.name ;
     return (
        
        <div>
            <p className="Comp"> 
                {Itemname}
                {/* {props.children} */}
            </p>
        </div>
     )
}

export default Sunny;