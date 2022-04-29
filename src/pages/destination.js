import { useRef, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

const token = localStorage.getItem('tokens');


function DesForm({myId}) {
    const desRef = useRef(null);
    
    const [destina, setDestina] = useState();
    const [address, setAddress] =useState('');



    function handleSubmit(event) {
        event.preventDefault();

        const enteredDes = desRef.current.value;
    
        const id = myId;

        const dat = {
             "id" : id,
             "destination" : enteredDes
        }


        fetch(`https://web-app-senditb.herokuapp.com/api/v1/parcels/${id}/destination`, {

            method: 'PUT',
            body: JSON.stringify(dat),
            mode: 'cors',
            crossDomain: 'true',
            headers:{
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': token
            }
            
           
        }).then(response => response.json())
            .then(data => {
                window.location.reload();
                setDestina('')
            });


    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                >
                    {({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
                        <div>
                            <label htmlFor='destination'> Destination</label>
                            <input {...getInputProps({ autoFocus: true })} required type='text' id='destination'name='destination'  ref={desRef} />
                            
                            <div>
                                {loading && <div>loading...</div>}

                                {suggestions.map(suggestion => (

                                    <div  {...getSuggestionItemProps(suggestion)}>
                                        <span key={suggestion.id} >{suggestion.description}</span>
                                    </div>

                                ))}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
                    
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
