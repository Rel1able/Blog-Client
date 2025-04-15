import { Link, useNavigate } from "react-router-dom";
import Auth from "./AuthContext";
import { useContext } from "react";


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
        <>
            <Link to="/">Blog</Link>
            <Link to="/posts">Posts</Link>
            {user ? <button onClick={handleLogout}>Log out</button> : 
                <>
                    <Link to="/login">Log in</Link>
                    <Link to="/sign-up">Sign-up</Link>
                </>

            }
            
            
        </>
    )


}
