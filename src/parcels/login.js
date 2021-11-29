import { useNavigate } from 'react-router-dom';
import LoginForm from "../pages/login";

function LoginParcel() {
    const history = useNavigate(null);

    function AdminDetail(GetData) {
        fetch('http://localhost:5000/register/login', {
            method: 'POST',
            body: JSON.stringify(GetData),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(() => {
            console.log(GetData);
            history('/post');

        });

    }

    return (
        <div>
            <LoginForm sendData={AdminDetail} />
        </div>

    );

}
export default LoginParcel;