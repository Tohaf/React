
import LoginForm from "../pages/login";
import { useState } from "react";
import { useNavigate } from "react-router";
/*
import { useNavigate } from "react-router";
const History = useNavigate();
    History('/post');
*/

function LoginParcel() {
    const [load, setLoad] = useState();
    const History = useNavigate();
    

    function AdminDetail(GetData) {
        console.log(GetData);
        fetch('https://web-app-senditb.herokuapp.com/api/v1/auth/login', {
            method: 'POST',
            body: JSON.stringify(GetData),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(response => response.json())
        .then((data) => {
            
            if(data.status === 'error'){
                setLoad('email or password not match');

            }else if(GetData.email === "lmn@gmail.com" && GetData.password === 'toheeb'){
                History('/receive')
                setLoad(data)
            }
            else{
                History('/get');
                setLoad(data)
                localStorage.setItem('token', JSON.stringify(data.nama));
                localStorage.setItem('tokens', data.token);
            }
        });
       
    }

    return (
        <div>
            <LoginForm sendData={AdminDetail} />
            {load && <div><pre>{load}</pre></div>}
        
        </div>

    );

}
export default LoginParcel;