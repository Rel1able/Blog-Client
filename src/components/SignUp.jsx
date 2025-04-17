import { useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import styles from "../styles/signup.module.css";

export default function SignUp() {

    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [errors, setErrors] = useState([]);

    
    async function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        try {
            const res = await fetch("https://blog-api-rrvr.onrender.com/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password, confPassword})
            })
            const data = await res.json();
            if (!res.ok) {
                if (data.errors) {
                    setErrors(data.errors.map(err => err.msg));
                } else {
                    setErrors(["An unexpected error occurred"])
                }
                return
            }
        } catch (err) {
            setErrors(["Server is unreachable. Try again later"])
        }
        
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
                        <input type="password" id="confPassword" name="confPassword" value={confPassword} onChange={e => setConfPassword(e.target.value)} />
                    </div>
                    <p>Already have an account? <Link className={styles.login} to="/login">Log in</Link></p>
                    <button className={styles.btn} type="submit">Sign Up</button>
                </form>
                {
                        errors.length > 0 && (
                            <ul className={styles.errorList}>
                            {errors.map((err, id) => (
                                    <li className={styles.error} key={id}>{err}</li>
                                ))}
                            </ul>
                        )
                    }
            </div>
            
        </>
        
    )
}