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
            <Link className={styles.title} to="/">Blog</Link>
            <Link className={styles.button} to="/posts">Posts</Link>
            {user ? <button className={styles.button} onClick={handleLogout}>Log out</button> : 
                <>
                    <Link className={styles.button} to="/login">Log in</Link>
                    <Link className={styles.signUpBtn} to="/sign-up">Sign up</Link>
                </>

            }
            
            
        </div>
    )


}
