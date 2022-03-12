import { useRef } from "react";

function RenderStatus(props) {
    const locRef = useRef();

    function statusDetail() {

        const enteredLoc = locRef.current.value;

        const statusData = {
            status: enteredLoc
        }

        props.statusValue(statusData);
    };


    return (
        <div>
            <form onSubmit={statusDetail}>

                <label htmlFor='status'> Status</label>

                <select id="status" name="status" ref={locRef} required >
                    <option value="transit"> transit</option>
                    <option value="delivered"> delivered</option>
                </select>

                <div>
                    <button type='submit'> Submit </button>
                </div>

            </form>
        </div>
    )
}

export default RenderStatus;