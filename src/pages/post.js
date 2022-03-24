import  { useRef } from 'react';
import  PlacesAutocomplete  from 'react-places-autocomplete';
import  { useState }  from 'react';
import 'react-phone-number-input/style.css'
import  PhoneInput  from 'react-phone-number-input'



function PostForm(props) {
    const [address, setAddress] = useState('');
    const [address1, setAddress1] = useState('');
    const [value, setValue] = useState();

    const destinationRef = useRef();
    const locationRef = useRef();
    const phoneRef = useRef();
    const recipientRef = useRef();
    var token = JSON.parse(localStorage.getItem('token'));
    var name = token
    var status = 'ready for pickup';


    function handleSubmit(event) {
        event.preventDefault();

        const enteredDes = destinationRef.current.value;
        const enteredLoc = locationRef.current.value;
        const enteredPhone = phoneRef.current.value;
        const enteredRecipient = recipientRef.current.value;

        const GetData = {

            destination: enteredDes,
            location: enteredLoc,
            status: status,
            name: name,
            recipient: enteredRecipient,
            phone: enteredPhone
        }
        props.sendData(GetData);
    };

    return (
        <div>

            <div>
                <form onSubmit={handleSubmit}>
                    <br></br>
                    <PlacesAutocomplete
                        value={address}
                        onChange={setAddress}
                    >
                        {({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
                            <div>
                                <label htmlFor='destination'> destination </label>
                                <input  {...getInputProps({ autoFocus: true })} required type='text' id='destination' ref={destinationRef} />
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
                                        <br></br>
                    <PlacesAutocomplete
                        value={address1}
                        onChange={setAddress1}
                    >
                        {({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
                            <div>
                                <label htmlFor='location'>pickup Location</label>
                                <input  {...getInputProps({ autoFocus: true })} required type='text' id='location' ref={locationRef} />
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
                    <br></br>
                    <div>
                        <label htmlFor='phone'></label>
                        <PhoneInput international defaultCountry="RU" countryCallingCodeEditable={false} value={value} onChange={setValue} required type='tel' id='phone' ref={phoneRef} placeholders='phone no'/>
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor='recipient'> recipient</label>
                        <input required type='text' id='recipient' ref={recipientRef} />
                    </div>
                    <br></br>
                    <div>
                        <button type='submit'> Submit </button>
                    </div>

                    
                </form>

            </div>




        </div>


    );
}
export default PostForm;
