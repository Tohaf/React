import { Link } from 'react-router-dom';

function WelcomePage(){

    return(
        <div>
            <h1> click on the link below to Register</h1>
            <div>
                <nav>
                    <Link to='/register'> Register User</Link>
                </nav>
            </div>
            <h2> login below if you have registered </h2>
            <div>
                <nav>
                    <Link to='/login'> login user </Link>
                </nav>
            </div>
            <h3> login as Admin below</h3>
            <div>
                <nav>
                    <Link to='/admin'> Admin section</Link>
                </nav>
            </div>
        </div>
    )

}

export default WelcomePage;