import { useRef, useState } from 'react';



function DesForm() {
    const desRef = useRef(null);
    const passRef = useRef();
    const [destina, setDestina] = useState();




    function handleSubmit(event) {
        event.preventDefault();

        const enteredDes = desRef.current.value;
        const enteredPass = passRef.current.value;
        const id = enteredPass;

        const dat = {
             "id" : enteredPass,
             "destination" : enteredDes
        }


        fetch(`https://web-app-senditb.herokuapp.com/parcel/${id}/destination`, {

            method: 'PUT',
            body: JSON.stringify(dat),
            mode: 'cors',
            crossDomain: 'true',
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            }
            
           
        }).then(response => response.json())
            .then(data => {
                setDestina(JSON.stringify(data))
            });


    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='destination'> Destination</label>
                    <input  required type='text' id='destination'name='destination'  ref={desRef} />
                </div>
                <div>
                    <label htmlFor='id'> RefID </label>
                    <input  required type='text' id='id' name='id' ref={passRef} />
                </div>
                <div>
                    <button type='submit'> Submit </button>
                </div>
                {destina && <div><pre>{destina}</pre></div>}
            </form>
        </div>


    );
}
export default DesForm;
