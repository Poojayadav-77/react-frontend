import axios from "axios";
import { useState } from "react";

function Reg() {

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const changeName = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submit = async () => {
        try {
            const res = await axios.post(
                "https://demo-12fl.onrender.com/register", // backend endpoint
                data
            );
            
            // Show the message from backend
            if (typeof res.data === "string") {
                alert(res.data); // if backend returns plain string
            } else if (res.data.message) {
                alert(res.data.message); // if backend returns { message: "..." }
            } else {
                alert(JSON.stringify(res.data)); // fallback for objects
            }

        } catch (xyz) {
            alert(xyz.response?.data?.message || xyz.response?.data || "Error");
        }
    };

    return (
        <>
            <h1>Iam App</h1>
            <input onChange={changeName} name="username" placeholder="Username" />
            <input onChange={changeName} name="email" placeholder="Email" />
            <input onChange={changeName} name="password" type="password" placeholder="Password" />
            <button onClick={submit}>Submit</button>
        </>
    );
}



export default Reg;