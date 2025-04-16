import { Link, useNavigate } from "react-router-dom";
import Auth from "./AuthContext";
import { useContext } from "react";
import styles from  "../styles/header.module.css"

export default function Header() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(Auth.Context);
    function handleLogout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
    }
    return (
        <div className={styles.container}>
            <div className={styles.blog}>
                <Link className={styles.title} to="/">Blog</Link>
                <Link className={styles.button} to="/posts">Posts</Link>
            </div>
           
            {user ? <button className={styles.signUpBtn} onClick={handleLogout}>Log out</button> : 
                <div className={styles.buttons}>
                    <Link className={styles.signUpBtn} to="/login">Log in</Link>
                    <Link className={styles.signUpBtn} to="/sign-up">Sign up</Link>
                </div>

            }
            
            
        </div>
    )


}
