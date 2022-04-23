import { useRef, useState } from "react";

function LocationData() {
    const locationRef = useRef(null);
    const nameRef = useRef(null);
    const [locate, setLocate] = useState();

    function SubmitHandler(event) {
        event.preventDefault();



            const location = locationRef.current.value;
            const Id = nameRef.current.value;
            const id = Id;

            const add = {
                "location": location,
                "id": Id
            }
            fetch(`https://web-app-senditb.herokuapp.com/api/v1/parcels/${id}/location`, {
                method: 'PUT',
                body: JSON.stringify(add),
                mode:'cors',
                crossDomain:'true',
                headers:{
                    'Content-Type': 'application/json;chrset=utf-8'
                }
            })
                .then(response =>
                    response.json())
                .then((data) => {

                    setLocate(JSON.stringify(data));

                });



    }

    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <div>
                    <input type='text' name='location' id='location' required placeholder='location' ref={locationRef} />

                </div>
                <div>
                    <input type='string' name='id' id='id' required placeholder='enter id' ref={nameRef} />
                </div>

                <button type='submit'>submit</button>

            </form>
            {locate && <div><pre>{locate}</pre> </div>}
        </div>

    )

};
export default LocationData;