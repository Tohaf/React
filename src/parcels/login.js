
import LoginForm from "../pages/login";
import { useState } from "react";
import { useNavigate } from "react-router";

function LoginParcel() {
    const [load, setLoad] = useState();
    const History = useNavigate();


    function AdminDetail(GetData) {
        fetch('https://web-app-senditb.herokuapp.com/register/login', {
            method: 'POST',
            body: JSON.stringify(GetData),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(response => response.json())
        .then((data) => {
            if(data){
                console.log(data);
                History('/post');
            

            }
        });
        setLoad('username or password not match');

    }

    return (
        <div>
            <LoginForm sendData={AdminDetail} />
            {load && <div><pre>{load}</pre></div>}
        
        </div>

    );

}
export default LoginParcel;