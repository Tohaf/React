import { useRef } from 'react';


function LocForm({ myne }) {
    const locRef = useRef();
    

    function handleSubmit(event) {
        event.preventDefault();

        const enteredLoc = locRef.current.value;

        const id = myne;
        console.log(id);
        const GetData = {
            "status": enteredLoc,
            "id": id
        };
        fetch(`http://localhost:5000/api/v1/parcels/${id}/status`, {
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
                console.log(data);
            });

    };


    return (
        <div>
            
                <form onSubmit={handleSubmit}>

                    <label htmlFor='status'> Status</label>

                    <select id="status" name="status" ref={locRef} required >
                        <option value="transit"> transit</option>
                        <option value="delivered"> delivered</option>
                    </select>

                    <div>
                        <button type='submit'> Submit </button>
                    </div>

                </form>
            

        </div>


    );
}
export default LocForm;
