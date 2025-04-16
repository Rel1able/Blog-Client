import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Auth from "./AuthContext";
import styles from "../styles/signup.module.css";

export default function Login() {

    const { setUser } = useContext(Auth.Context);
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
        setUser(user);
        console.log("Token is", token, "user is", user)
        console.log(data);
        navigate("/posts");
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.title}>Log in</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.labelInputContainer}>
                         <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className={styles.labelInputContainer}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                        
                        <button className={styles.btn} type="submit">Log in</button>
                    </form>
            </div>
            
        </>
        
    )
}