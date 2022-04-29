
import { useState, useEffect, Fragment } from 'react';
import Tbod from "./body";
import LocForm from "../pages/status";
import { Link } from 'react-router-dom';

const token = localStorage.getItem('tokens');

function ReceiveAll() {
    const[contact, setContact] = useState([])
    const [load, setLoad] = useState(false);


    useEffect(() => {
        fetch('https://web-app-senditb.herokuapp.com/api/v1/parcels', {
            headers: {
                'authorization': token,
            }
        })
            .then(
                response => response.json()
            ).then((data) => {
                
                setContact(data)

            });
    }, [contact]);

    

    function edity(){
        setLoad(true);
    }

    function disappear(){
        setLoad(load);
    }

    function delet(){
        alert('deleted');

    }

    return (
        <div >  
            <Link to='../'>Logout</Link>
            {load ? <LocForm oncance={disappear} /> : null }
            <table cellPadding={40} cellSpacing={0} >
                <thead>
                    <tr>
                        <th>orderid</th>
                        <th>destination</th>
                        <th>location</th>
                        <th>status</th>
                        <th>Update Status</th>
                        <th>Delete order</th>
                    </tr>
                </thead>
                <tbody> 
                    {contact.map((valo) => (
                        <Fragment key={valo._id}>
                            <Tbod   myne={valo._id} valo={valo} editable={edity} del={delet} />
                             

                        
                        </Fragment>
                           
                    ))};
                </tbody>
            </table>
        </div>
    );

}
/*
{setLoadData.map((val) => (
    <tr>
        <td>{val._id}</td>
        <td>{val.destination}</td>
        <td>{val.location}</td>
        <td>{val.status}</td>
        <td>{<button onClick={edit}>edit</button>}</td>
        <td>{<button onClick={cancel}>cancel</button>}</td>

    </tr>
))}
*/

export default ReceiveAll;