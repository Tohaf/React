import AdminForm from "../pages/admin";
import { useNavigate } from 'react-router-dom';

function AdminParcel(){
    const navigate = useNavigate();

    function AdminDetail(GetData){
        fetch(' http://localhost:5000/admin/add', {
            method: 'POST',
            body: JSON.stringify(GetData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate('/receive');
            console.log(GetData);
        });
    }

    return(
        <div>
            <AdminForm sendData={AdminDetail} />
        </div>

    );

}
export default AdminParcel;