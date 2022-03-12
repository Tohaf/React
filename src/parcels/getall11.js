import { useEffect } from "react";
import Senet from "../pages/getall1";

function Https(){

    useEffect(() => {
        fetch('https://web-app-senditb.herokuapp.com/parcel/getall')
        .then(
            response => response.json()
        ).then((data) => {    
            
            data.map((val) => {
            

                    <Senet 

                    key={val._id}
                    id= {key}
                    destination={val.destination}
                    location= {val.location}
                    status= {val.status}
                    
                    />
                   
                

            });

        })
    }, []);
}

export default Https;