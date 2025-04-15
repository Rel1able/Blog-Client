import {Link} from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import Auth from "./AuthContext";
import Header from "./Header";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(Auth.Context)
    
    useEffect(() => {
        async function getPosts() {
            const posts = await fetch("https://blog-api-rrvr.onrender.com/posts");
            const data = await posts.json();
            console.log(data);
            setPosts(data);
        }
        getPosts()
    }, [])
    return (
        <>
            <Header user={user}/>
             <h1>Posts</h1>
        <ul>
            {posts.map((post, id) => (
                <li key={id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
        </>
       
    )
}