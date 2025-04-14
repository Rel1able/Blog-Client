import { Link } from "react-router-dom";


export default function Header() {
    function handleLogout() {

        localStorage.removeItem("user");
        localStorage.removeItem("token");

    }
    return (
        <>
            <h1>Blog</h1>
            <Link to="/login">Log in</Link>
            <Link to="/sign-up">Sign-up</Link>
            <button onClick={handleLogout}>Log out</button>
        </>
    )


}
