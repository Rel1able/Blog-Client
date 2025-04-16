import { useParams, useLoaderData} from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CreateComment from "./CreateComment";
import Header from "./Header";
import Auth from "./AuthContext";

export default function SinglePost() {
    const postId = useParams();
    const post = useLoaderData();
    const [comments, setComments] = useState([]);
    const { user,  token} = useContext(Auth.Context);
    async function getComments() {
            const response = await fetch(`https://blog-api-rrvr.onrender.com/posts/${postId.id}/comments`);
            const commentsData = await response.json();
            setComments(commentsData);
        }
    useEffect(() => {
        getComments()
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