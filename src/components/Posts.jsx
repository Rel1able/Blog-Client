
import { useState, useEffect } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    
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
             <h1>Posts</h1>
        <ul>
            {posts.map((post, id) => (
                <li key={id}>
                    <h3>{post.title}</h3>
                </li>
            ))}
        </ul>
        </>
       
    )
}