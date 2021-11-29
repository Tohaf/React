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


}

export default GetAll;