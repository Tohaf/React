import {  useNavigate } from "react-router";
import RegisterForm from "../pages/register";

function RegisterParcel(){
    const Navigate = useNavigate();

    function AdminDetail(GetData){
        fetch('https://web-app-senditb.herokuapp.com/register/pass', {
            method: 'POST',
            body: JSON.stringify(GetData),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then( () => {
            Navigate('/login')
            console.log(GetData);
        })

       
    }

    return(
        <div>
            <RegisterForm sendData={AdminDetail} />
        </div>

    );

}
export default RegisterParcel;