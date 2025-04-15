import { useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function SignUp() {

    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    async function handleSubmit(e) {
        e.preventDefault();
        await fetch("https://blog-api-rrvr.onrender.com/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password})
        })
        navigate("/login");
    }

    return (
        <>
            <Header/>
            <h2>Sign up here</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Sign Up</button>
            </form>
        </>
        
    )
}