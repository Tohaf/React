import { Link } from "react-router-dom";
import { useState, useEffect } from "react/cjs/react.development";
import GetAll from "../pages/getall";


function ReceiveAll() {
    const [loadData, setLoadtData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parcel/getall').then(
            response => response.json()
        ).then((data) => {
            const parcels = [];

            for (const key in data) {
                const sendData = {
                    id: key,
                    ...data[key]
                };

                parcels.push(sendData);
            }

            console.log(data);
            setLoadtData(parcels);

        });

    }, [])



    return (
        <section>

            <h1> all parcels </h1>
            <Link to='/get'> Get a specific parcel</Link>
            <GetAll parcels={loadData} />

        </section>
    );

}

export default ReceiveAll;