
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Purpos from "./get1";

function RegisterData() {
    var token = JSON.parse(localStorage.getItem('token'));
    var name = token

    const [getResult, setGetResult] = useState([]);
    const [order, setOrder] = useState();
    const [deliver, setDeliver] = useState();
    const [transit, setTransit] = useState();
    const [entry, setEntry] = useState();

   

    useEffect(() => {
        fetch(`https://web-app-senditb.herokuapp.com/parcel/:id/search?name=${name}`)
            .then(
                response => response.json())
            .then(data => {
                setGetResult(data);
                const deliver = data.filter((item) => {
                    return item.status === 'delivered';
                })
                setDeliver(deliver.length);

                const transit = data.filter((item) => {
                    return item.status === 'transit';
                })
                setTransit(transit.length);

                setOrder(data.length);

                if(data.length === 0){
                    setEntry('NO ENTRY YET');
                }else{
                    setEntry('')
                }

            })
    }, [name])


    return (
        <div>
            
            
            Welcome {name}
            <br></br>
            <Link to='./post' > create order</Link>
            <ul>

                <li>Total Number Of Orders: <span id="order">{order && <span>{order}</span>}</span></li>
                <li>Number Of Orders Delivered: <span id="deliver">{deliver && <span>{deliver}</span>}</span></li>
                <li> Number Of Orders On Transit:  <span id="transit">{transit && <span>{transit}</span>}</span></li>
                
            </ul>

            <table cellPadding={40} margin={0} >
                <thead>
                    <tr>
                        <th>Order id</th>
                        <th>destination</th>
                        <th>Location</th>
                        <th>recipient name</th>
                        <th>recipient mobile</th>
                        <th>status</th>
                        <th>update destination</th>
                        <th>cancel</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {
                        getResult.map((val) => {
                            return (
                                <Purpos key={val._id} val={val} />
                            )

                        })
                    }
                </tbody>
                
            </table>
            {entry && <div><pre>{entry}</pre></div>}

        </div>
    )

}
export default RegisterData;

/*
<div>
                <input type='text' name='firstname' id='firstname' required placeholder='firstname' ref={firstnameRef}/>

                </div>

                <button type='submit'>submit</button>
                <br/>
                <Link to='/'> Back to homepage </Link>
                <br/>
                <Link to='/receive'> getall parcel </Link>
                {getResult && <div role='alert'><pre>{getResult}</pre></div>}



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
*/
