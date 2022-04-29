import { useState } from "react";
import Modal from "react-modal";

import LocForm from "../pages/status";

Modal.setAppElement('#root');

const token = localStorage.getItem('tokens');


function Tbod({ valo, editable, del, myne }) {

    const [load, setLoad] = useState(false);

    const customStyles = {
        content: {
            top: '10%',
            left: '50%',
            right: '50%',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        },
        overlay: {
            background: ''
            
        }
    };

    const id = myne;

    function myn() {

        if (valo.status === 'transit' || valo.status === 'ready for pickup') {
            alert('cannot be deleted, Order still in transit and not yet delivered');
        } else if (window.confirm("are you sure you want to delete")) {
            fetch(`https://web-app-senditb.herokuapp.com/api/v1/parcels/${id}/cancel`, {
                method: 'DELETE',
                mode: 'cors',
                crossDomain: 'true',
                body: JSON.stringify(id),
                headers: {
                    'Content-Type': 'application/json:charset=utf-8',
                    'authorization': token,
                }
            })
                .then(response => response.json())
                .then((data) => {
                    console.log(data);
                    alert('succesfully deleted')

                });

        } else {

            window.document.location = '/senditff/receive';
        }

    }


    function edita() {
        if (valo.status === 'cancelled' || valo.status === 'delivered') {
            alert('already cancelled or delivered');
        }
        else {
            setLoad(true);
        }    

    }

    function closeModal() {
        setLoad(false);
    }



    return (

        <>
            <tr>
                <td>{valo._id}</td>
                <td>{valo.destination}</td>
                <td>{valo.location}</td>
                <td>{valo.status}</td>
                <td>{<button type="button" onClick={edita}>edit</button>}</td>
                <td>{<button onClick={myn}>Delete</button>}</td>
            </tr>
            <Modal
                title='enter update'
                isOpen={load}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <LocForm myne={id} />
            </Modal>
        </>

    );

}

export default Tbod;
