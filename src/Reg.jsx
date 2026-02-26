import axios from "axios";
import { useState } from "react";

function Reg() {

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const changeName = (e) => {
        setData({...data,[e.target.name]: e.target.value})
    }

    const submit = async () => {
        try {
            const res = await axios.post("https://demo-1.onrender.com/register",
                data
            )
            alert(res.data);
        } catch (xyz) {
            alert(xyz.response?.data || "Error");
        }
    };

    return (
        <>
            <h1>Iam App</h1>
            <input onChange={changeName} name="username" placeholder="Username" />
            <input onChange={changeName} name="email" placeholder="Email" />
            <input onChange={changeName} name="password" type="password"placeholder="Password" />
            <button onClick={submit}>Submit</button>
        </>
    );
}

export default Reg;