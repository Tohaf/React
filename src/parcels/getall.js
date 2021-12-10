import { Link } from "react-router-dom";
import { useState } from "react";


function ReceiveAll() {

    const [loadData, setLoadtData] = useState();

    function GetAll(event){
        event.preventDefault();
        
        
            fetch('https://web-app-senditb.herokuapp.com/parcel/getall').then(
                response => response.json()
            ).then((data) => {
               setLoadtData(
                data.map((val) => {
                    <val key={val.id} />
                    return(
                        <ul>
                            < div>
                                <li>Name: {val.name}</li>
                                <li>Email: {val.email}</li>
                                <li>Location: {val.location}</li>
                                <li>destination: {val.destination}</li>
                                <li>ID: {val._id}</li>
                                <li>password: {val.password}</li>
                                <li>{val.status}</li>
                                <Link to='/cancel'> delete data</Link>
                                <br/>
                                <Link to='/destination'>update Location</Link>
                                <br/>
                                <Link to='/status'>update status</Link>
                            
                            </div>


                        </ul>
                      
                    );
                    
                })
               )
    
            });
    
        
    }

    



    return (
    

            <form  onSubmit={GetAll}>
            
                <button type='submit'> Get all parcel </button>
                <br/>
                <br/>
                <Link to='/get'> Get a specific parcel</Link>

                {loadData && <div role='alert' ><pre>{loadData}</pre> </div>}
            </form>
    );

}

export default ReceiveAll;