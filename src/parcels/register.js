
import RegisterForm from "../pages/register";
import { useNavigate } from "react-router";

function RegisterParcel(){
    const Navigate = useNavigate();


    function AdminDetail(GetData){
      
        fetch('https://web-app-senditb.herokuapp.com/register/pass', {
            method: 'POST',
            body: JSON.stringify(GetData),
            headers:{
                'Content-Type': 'application/json;charset',
                
            }
        }).then( (data) => {
            
            console.log(data);
            Navigate('/login');
        })

       
    }

    return(
        <div>
            <RegisterForm sendData={AdminDetail} />
        </div>

    );

}
export default RegisterParcel;