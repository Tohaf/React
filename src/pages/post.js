import { useRef } from 'react';
import { Link } from 'react-router-dom';


function PostForm(props) {
    const userRef = useRef();
    const passRef = useRef();
    const destinationRef = useRef();
    const locationRef = useRef();
    const emailRef = useRef();
    const statusRef = useRef();
    

    function handleSubmit(event) {
        event.preventDefault();

        const enteredUser = userRef.current.value;
        const enteredPass = passRef.current.value;
        const enteredDes = destinationRef.current.value;
        const enteredLoc = locationRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredstatus = statusRef.current.value;
        
        const GetData= {
            name: enteredUser,
            password: enteredPass,
            destination: enteredDes,
            location: enteredLoc,
            email: enteredEmail,
            status: enteredstatus
        }
        props.sendData(GetData);
    };

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'> Username</label>
                <input  required type='text' id='name' ref={userRef} />
            </div>
            <div>
                <label htmlFor='password'> Password</label>
                <input  required type='text' id='password' ref={passRef} />
            </div>
            <div>
                <label htmlFor='destination'> destination </label>
                <input  required type='text' id='destination' ref={destinationRef} />
            </div>
            <div>
                <label htmlFor='location'> Location</label>
                <input  required type='text' id='location' ref={locationRef} />
            </div>
            <div>
                <label htmlFor='email'> Email</label>
                <input  required type='email' id='email' ref={emailRef} />
            </div>
            <div>
                <label htmlFor='status'> Status</label>
                <input  required type='status' id='email' ref={statusRef} />
            </div>
            <div>
                <button type='submit'> Submit </button>
            </div>
            
            <div>
                <Link to='/get'> Get your ordered parcel</Link>
            </div>
        </form>
    </div>


    );
}   
export default PostForm;
