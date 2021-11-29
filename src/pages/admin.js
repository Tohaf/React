import { useRef } from 'react';
import { Link } from 'react-router-dom'
import classes from './admin.module.css';


function AdminForm(props) {
    const userRef = useRef();
    const passRef = useRef();


    function handleSubmit(event) {
        event.preventDefault();

        const enteredUser = userRef.current.value;
        const enteredPass = passRef.current.value;

        const GetData = {
            username: enteredUser,
            password: enteredPass
        }
        props.sendData(GetData);
    };

    return (
        <div className={classes.form}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'> Username</label>
                    <input required type='text' id='username' ref={userRef} />
                </div>
                <div>
                    <label htmlFor='password'> Password</label>
                    <input  required type='text' id='password' ref={passRef} />
                </div>
                <div>
                    <button type='submit'> Submit </button>
                </div>
            </form>
            <nav>
                <Link to='/login'> go to login </Link>
            </nav>

        </div>


    );

}

export default AdminForm;
