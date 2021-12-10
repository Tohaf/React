
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function RegisterData(){

    const firstnameRef = useRef();
    const[getResult,  setGetResult] = useState();
    

    function submitHandler(event){
        event.preventDefault();

        const FirstName = firstnameRef.current.value;
    
        fetch(`https://web-app-senditb.herokuapp.com/parcel/:id/search?name=${FirstName}`).then(
            response => response.json()).then(data => {
                setGetResult(
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
                                    <Link to='/location'>update Location</Link>
                                
                                </div>


                            </ul>
                          
                        );
                        
                    })
                )
                
                

                

            })
        
           
    }


   


    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                <input type='text' name='firstname' id='firstname' required placeholder='firstname' ref={firstnameRef}/>

                </div>

                <button type='submit'>submit</button>
                <br/>
                <Link to='/'> Back to homepage </Link>
                <br/>
                <Link to='/getall'> getall parcel </Link>
                {getResult && <div role='alert'><pre>{getResult}</pre></div>}
            
            </form>
        </div>
    )

}
export default RegisterData;