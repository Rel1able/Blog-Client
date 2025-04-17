import { useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import styles from "../styles/signup.module.css";

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
            <Header />
            <div className={styles.container}>
                <h2 className={styles.title}>Sign up here</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.labelInputContainer}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className={styles.labelInputContainer}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className={styles.labelInputContainer}>
                        <label htmlFor="confPassword">Confirm Password</label>
                        <input type="password" id="confPassword" name="confPassword" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <p>Already have an account? <Link className={styles.login} to="/login">Log in</Link></p>
                    <button className={styles.btn} type="submit">Sign Up</button>
                </form>
            </div>
            
        </>
        
    )
}