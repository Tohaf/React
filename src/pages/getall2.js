import Senet from "./getall1"


function GetAll(props) {

    return (
        <div>
            <ul>
                {props.parcels.map((value) => (
                    <Senet key={value.id}

                        lname={value.name}
                        email={value.email}
                        password={value.password}
                        locate={value.location}
                        destination={value.destination}
                        statu={value.status}
                        id={value._id}
                    />

                ))}
            </ul>
        </div>
    );

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


}

export default GetAll;