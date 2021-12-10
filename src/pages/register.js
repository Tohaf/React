import { useRef } from 'react';


function RegisterForm(props) {
    const userRef = useRef();
    const passRef = useRef();
    const firstRef = useRef();
    const lastRef = useRef();
    const emailRef = useRef();
    

    function handleSubmit(event) {
        event.preventDefault();

        const enteredUser = userRef.current.value;
        const enteredPass = passRef.current.value;
        const enteredFirst = firstRef.current.value;
        const enteredLast = lastRef.current.value;
        const enteredEmail = emailRef.current.value;
        
        const GetData= {
            username: enteredUser,
            password: enteredPass,
            fistname: enteredFirst,
            lastname: enteredLast,
            email: enteredEmail
        }
        props.sendData(GetData);
    };

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'> Username</label>
                <input  required type='text' id='username' ref={userRef} />
            </div>
            <div>
                <label htmlFor='password'> Password</label>
                <input  required type='text' id='password' ref={passRef} />
            </div>
            <div>
                <label htmlFor='firstname'> Firstname</label>
                <input  required type='text' id='firstname' ref={firstRef} />
            </div>
            <div>
                <label htmlFor='lastname'> Lastname</label>
                <input  required type='text' id='lastname' ref={lastRef} />
            </div>
            <div>
                <label htmlFor='email'> Email</label>
                <input  required type='email' id='email' ref={emailRef} />
            </div>
            <div>
                <button type='submit'> Submit </button>
            </div>
        </form>
    </div>


    );
}   
export default RegisterForm;
