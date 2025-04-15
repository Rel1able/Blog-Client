import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Login() {

    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://blog-api-rrvr.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({username, password})
        })
        const data = await response.json();
        const token = data.token;
        const user = data.user;
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user));
        console.log("Token is", token, "user is", user)
        console.log(data);
        navigate("/posts");
    }

    return (
        <>
            <Header/>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Log in</button>
            </form>
        </>
        
    )
}