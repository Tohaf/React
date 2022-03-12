import {  useState } from "react";
import ShowFile from "../parcels/show";

function Senet(props) {
    const [show, setShow] = useState(false);

    function edit(event) {
        event.preventDefault();
        setShow(true);
    }
    function cancel() {
        setShow(show)
    }
            
                return (
                    <tr>
                        <td>{props.id}</td>
                        <td>{props.destination}</td>
                        <td>{props.location}</td>
                        <td>{props.status}</td>
                        <td>{<button onClick={edit}>edit</button>}</td>
                        <td>{<button onClick={cancel}>delete</button>}</td>
                        
                        {show && <ShowFile onSub={cancel} onCance={cancel} />}
                    </tr>
                    
                )
    
}

export default Senet;