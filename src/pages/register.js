import { useRef } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link } from 'react-router-dom';


function RegisterForm(props) {
    const [address, setAddress] =useState('');
    const [value, setValue] = useState();
    const [passw, setPassw] = useState();
    const [emailv, setEmailv] = useState();
    
    const passRef = useRef();
    const cpassRef = useRef();
    const firstRef = useRef();
    const lastRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();


    function handleSubmit(event) {
       
        event.preventDefault();

        const enteredCpass = cpassRef.current.value;
        const enteredPass = passRef.current.value;
        const enteredFirst = firstRef.current.value;
        const enteredLast = lastRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredAddress = addressRef.current.value;
        const enteredPhone = phoneRef.current.value;

        const GetData = {
            confirmPassword: enteredCpass,
            password: enteredPass,
            nama: enteredFirst,
            namo: enteredLast,
            email: enteredEmail,
            phone: enteredPhone,
            address: enteredAddress
        }
       
        props.sendData(GetData);

    };

    function displayp(){
        const enteredCpass = cpassRef.current.value;
        const enteredPass = passRef.current.value;
        
        if(enteredCpass !== enteredPass){
            setPassw('password not match');
        }
        else{
            setPassw('')
        }
    }

    function emailva(){
        const vall = "^[a-zA-ZO]+@[a-zA-ZO]+\\.[A-Za-z]+$";
        const enteredEmail = emailRef.current.value;
        if(enteredEmail.match(vall)){
            setEmailv('')
        }else{
            setEmailv('Not a valid email');
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <br></br>
        
                <div>
                    <label htmlFor='nama'> Firstname</label>
                    <input required type='text' id='nama' ref={firstRef} />
                </div>
                <br></br>
                <div>
                    <label htmlFor='namo'> Lastname</label>
                    <input required type='text' id='namo' ref={lastRef} />
                </div>
                <br></br>
                <div>
                    <label htmlFor='password'> Password</label>
                    <input required  type='password' id='password' name='password' ref={passRef}/>
                </div>
                <br></br>
                <div>
                    <label htmlFor='confirmPassword'> confirmPassword</label>
                    <input required onChange={displayp} type='password' id='confirmPassword' name='confirmPassword' ref={cpassRef} />
                    {passw && <div><pre>{passw}</pre></div>}
                </div>
                <br></br>
                <div>
                    <label  htmlFor='email'> Email</label>
                    <input required onChange={emailva} type='email' id='email' ref={emailRef} />
                    {emailv && <div><pre>{emailv}</pre></div>}
                </div>
                <br></br>
                <div>
                    <label htmlFor='phone'></label>
                    <PhoneInput international defaultCountry="RU" countryCallingCodeEditable={false} value={value} onChange={setValue} required type='tel' id='phone' ref={phoneRef} />
                </div>
                <br></br>
                <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                >
                    {({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
                        <div>
                            <label htmlFor='address'>address</label>
                            <input  {...getInputProps({ autoFocus: true })} required type='text' id='address' ref={addressRef} />
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
                    <button type='submit'> Submit </button>
                </div>
                Already have an account:<Link to='/login'>Login</Link>
               
               
            </form>
        </div>

    );

}
export default RegisterForm;

/*
const initMap = () => {
        var autocomplete;
            
        autocomplete = new google.maps.places.Autocomplete(addressRef.current.value, {
            types:['geocode'],
    
        });
       
        google.maps.event.addListener(autocomplete, 'place_changed', function(){
            var near_place = autocomplete.getPlace();
        });
    }
*/