import React, {useState} from "react";


const FormBuilder = () => {

    const [fields, setFields] = useState([{value : null}])
    return (
        <div>
            <form>
                <h1>Form Test 2.0</h1>
                <input value={fields.value}/>
            </form>
        </div>
    )
}

export default FormBuilder;