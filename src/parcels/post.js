import PostForm from "../pages/post";
import { useState } from 'react';
import { useNavigate } from "react-router";

function PostParcel(){
    const Navigate = useNavigate();
    const [data, setData] = useState();


    function AdminDetail(GetData){

        fetch('http://localhost:5000/parcel', {

            method: 'POST',
            body: JSON.stringify(GetData),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(Response => Response.json())
        .then( (data) => {

            console.log(data);
            setData(JSON.stringify(data));
            Navigate('/get');
        });
        setData(data);
       
    }

    return(
        <div>
            <PostForm sendData={ AdminDetail } />
        </div>
        

    );

}
export default PostParcel;