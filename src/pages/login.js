import { useRef } from 'react';
import { Link } from 'react-router-dom';


function LoginForm(props) {
    const userRef = useRef();
    const passRef = useRef();
    

    function handleSubmit(event) {
        event.preventDefault();

        const enteredUser = userRef.current.value;
        const enteredPass = passRef.current.value;
        
        const GetData= {
            email: enteredUser,
            password: enteredPass
        }
        props.sendData(GetData);
    };

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <br></br>
            <div>
                <label htmlFor='email'> Email </label>
                <input  required type='email' id='email' ref={userRef} />
            </div>
            <br></br>
            <div>
                <label htmlFor='password'> Password</label>
                <input  required type='password' id='password' ref={passRef} />
            </div>
            <br></br>
            <div>
                <button type='submit'> Submit </button>
            </div>
            NOT YET A USER?<Link to='/register'> REGISTER</Link>
            <br></br>
            <Link to='/'>Go to homepage</Link>
        </form>
        
    </div>


    );
}   
export default LoginForm;
