import { useState, useRef } from 'react';


function LocForm(props) {
    const locRef = useRef();
    const passRef = useRef();
    const [stat, setStat] = useState();


    function handleSubmit(event) {
        event.preventDefault();

        const enteredLoc = locRef.current.value;
        const enteredPass = passRef.current.value;
        const id = enteredPass

        const GetData = {
            "status" : enteredLoc,
            "id": enteredPass
        }
        fetch(`http://localhost:5000/parcel/${id}/status`, {
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

                setStat(JSON.stringify(data));
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='status'> Status</label>
                    <input  required type='text' id='status' ref={locRef} />
                </div>
                <div>
                    <label htmlFor='id'> RefID </label>
                    <input  required type='text' id='id' ref={passRef} />
                </div>
                <div>
                    <button type='submit'> Submit </button>
                </div>
                {stat && <div><pre>{stat}</pre> </div>}
            </form>
        </div>


    );
}
export default LocForm;
