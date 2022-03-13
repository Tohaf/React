import { useState, useRef } from 'react';
import classes from './delete.module.css'

function CancelData() {
    
    const [delt, setDelt] = useState();
    const delRef = useRef();

    function deletion(event) {
        event.preventDefault();

        const id = delRef.current.value
        fetch(`http://localhost:5000/parcel/${id}/cancel`, {
            method: 'DELETE',
            mode: 'cors',
            crossDomain: 'true',
            body: JSON.stringify(id),
            headers: {
                'Content-Type': 'application/json:charset=utf-8'
            }
        })
            .then(response => response.json())
            .then((data) => {
                setDelt(JSON.stringify(data));
            });

    }


    return (
        <form className={classes.form} onSubmit={deletion}>
            <label htmlFor='myId'> RefID </label>
            <input name='myId' type='text' required ref={delRef} />
            <button type='submit'> Delete</button>
            {delt && <div role='alert' ><pre>{delt}</pre> </div> }
        </form>
    )

}

export default CancelData;