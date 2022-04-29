import { useNavigate } from "react-router";
import { useState } from "react";
import RegisterForm from "../pages/register";

const token = localStorage.getItem('token');

function RegisterParcel(){
    const [stat, setStat] = useState();
    const Navigate = useNavigate();
    

    function AdminDetail(GetData){
        fetch('https://web-app-senditb.herokuapp.com/api/v1/auth/signup', {
            method: 'POST',
            body: JSON.stringify(GetData),
            headers:{
                'Content-Type': 'application/json',
                'authorization': token
                
            }
        }).then(response => response.json())
        .then( (data) => {
            console.log(data);
            if(GetData.confirmPassword !== GetData.password){
                alert('password are not the same');
            }
            else if(data.status === "error"){
                setStat("Email already exiist");
                alert('Email already exist');
            }
            else{
                Navigate('/login'); 
        
            }
             
        })
       

       
    }

    return(
        <div>
            
             <RegisterForm sendData={AdminDetail} />
             {stat &&  <div><pre>{stat}</pre></div> }
            
        </div>

    );

}
export default RegisterParcel;