import { useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SinglePost() {
    const postId = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        async function getPost() {
            const post = await fetch(`https://blog-api-rrvr.onrender.com/posts/${postId.id}`)
            const postData = await post.json();
            console.log("Post data", postData);
            setPost(postData);
        }
        getPost();
    }, [])
    return (
        <>
            <h1>Target post</h1>
            <h1>{post.title}</h1>
            <h2>{post.text}</h2>
            <Outlet/>
        </>

    )
}