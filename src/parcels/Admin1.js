import AdminForm from "../pages/admin";
import { useState } from "react";
import { useNavigate } from "react-router";

function AdminParcel(){
    const [Valu, setValu] = useState(true);
    const Navigate = useNavigate();


    function AdminDetail(GetData){
        fetch('https://web-app-senditb.herokuapp.com/admin/add', {
            method: 'POST',
            body: JSON.stringify(GetData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then((data) => {
            if(data){
                console.log(data);
                Navigate('/get');
                
            }
            
        });

        setValu('username or password not match');
    }

    return(
        <div>
            <AdminForm sendData={AdminDetail} />
            {Valu && <div role='alert' ><pre>{Valu}</pre> </div> }
        </div>
        

    );

}
export default AdminParcel;