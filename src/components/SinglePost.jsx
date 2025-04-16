import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import CreateComment from "./CreateComment";
import Header from "./Header";

export default function SinglePost() {
    const postId = useParams();

    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");
    async function getComments() {
            const response = await fetch(`https://blog-api-rrvr.onrender.com/posts/${postId.id}/comments`);
            const commentsData = await response.json();
            console.log("Comments",commentsData);
            setComments(commentsData);
        }
        
    

    useEffect(() => {
        async function getPost() {
            const response = await fetch(`https://blog-api-rrvr.onrender.com/posts/${postId.id}`)
            const postData = await response.json();
            console.log("Post data", postData);
            setPost(postData);
        }
        getPost();
        getComments()
    }, [])

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedToken) {
            setToken(storedToken);
            console.log("Your token is", storedToken)
        }
        if (storedUser) {
            setUser(storedUser);
            console.log("User is ", storedUser)
        }
        
    }, [])
    return (
        <>
            <Header/>
            <h1>{user.username}</h1>
            <h1>Target post</h1>
            <h1>{post.title}</h1>
            <h2>{post.text}</h2>
            <h1>Comments</h1>
            <ul>
                {comments.map((comment, id) => (
                    <li key={id}>
                        {comment.text}
                    </li>
                ))}
            </ul>
            {user ?  <CreateComment token={token} getComments={getComments} /> : null}
           
        </>

    )
}