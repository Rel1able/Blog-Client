import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Comments() {
    const postId = useParams();
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        async function getComments() {
            const response = await fetch(`https://blog-api-rrvr.onrender.com/posts/${postId.id}/comments`);
            const commentsData = await response.json();
            console.log("Comments",commentsData);
            setComments(commentsData);
        }
        getComments()
    }, [postId])

    return (
        <>
            <h1>Comments</h1>
            <ul>
                {comments.map((comment, id) => (
                    <li key={id}>
                        {comment.text}
                    </li>
                ))}
            </ul>

        </>

    )
}