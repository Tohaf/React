import Modal from "react-modal/lib/components/Modal";
import { useState } from "react/cjs/react.development";
import DesForm from "./destination";


function Purpos({ val }) {

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


    const cancell = () => {
        const status = "cancelled";
        const id = val._id;

        const GetData = {
            "status": status,
            "id": id
        };

        if (val.status === 'delivered' || val.status === 'cancelled') {
            alert("order already delivered/cancelled");

        } else if (window.confirm("are you sure you want to cancel")) {
            fetch(`https://web-app-senditb.herokuapp.com/parcel/${id}/status`, {
                method: 'put',
                body: JSON.stringify(GetData),
                crossDomain: true,
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            })
                .then(response =>
                    response.json()
                )
                .then(data => {
                    window.location.reload();
                    alert('sucessfully cancelled');

                });

        } else {
            window.document.location = '/senditff/get'
        }

    }


    function closeModal() {
        setLoad(false);
    }



    const updateD = () => {
        
        if (val.status === 'cancelled' || val.status === 'delivered') {
            alert('already cancelled or delivered');
        }
        else {
            setLoad(true);
        }    

/*            
            const destination = prompt('kindly update destination', <input/>);

            if (destination != null) {
                const enteredDes = destination;

                const id = val._id;

                const dat = {
                    "id": id,
                    "destination": enteredDes
                }


                fetch(`http://localhost:5000/parcel/${id}/destination`, {

                    method: 'PUT',
                    body: JSON.stringify(dat),
                    mode: 'cors',
                    crossDomain: 'true',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    }


                }).then(response => response.json())
                    .then(data => {
                        console.log(data);
                        window.location.reload();
                    });

            }
        }
*/
    }





    return (

        <>
        
            <tr key={val._id}>
                <td>{val._id}</td>
                <td>{val.destination}</td>
                <td>{val.location}</td>
                <td>{val.recipient}</td>
                <td>{val.phone}</td>
                <td>{val.status}</td>
                <td>{<button onClick={updateD}>edit</button>}</td>
                <td>{<button onClick={cancell} >cancel</button>}</td>
            </tr>
            <Modal
                title='enter update'
                isOpen={load}
                onRequestClose={closeModal}
                style={customStyles}
            >
                {<DesForm myId={val._id}/>}
            </Modal>
        </>


    )
}

export default Purpos;