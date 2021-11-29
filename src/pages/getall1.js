import { Link } from 'react-router-dom'

function Senet(props){

    return(
        <div>
            <ul>
                <li>username: {props.lname}</li>
                <li>password: {props.password}</li>
                <li>Email: {props.email}</li>
                <li>Location: {props.locate}</li>
                <li>destination: {props.destination}</li>
                <li>Status: {props.statu}</li>
                <li >Id: {props.id}</li>
                <Link to='/cancel'>delete data</Link>
                <br/>
                <Link to='/status'>update status</Link>
                <br/>
                <Link to='/destination'>update destination</Link>
                <br/>
                <br/>
            </ul>
        </div>
        
       
    )

}

export default Senet;