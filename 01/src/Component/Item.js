
import './Item.css';

function FirstComponent(props) { 

    const ItemName = props.name;

    return <p className="Component">{ItemName} </p>
}

export default FirstComponent;