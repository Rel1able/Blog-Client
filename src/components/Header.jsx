import { Link, useNavigate } from "react-router-dom";


export default function Header({ user }) {
    const navigate = useNavigate();
    
    function handleLogout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
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
