import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CreateComment({token, getComments}) {

    const postId = useParams();

    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        const request = await fetch(`https://blog-api-rrvr.onrender.com/posts/${postId.id}/comments`, {
            method: "POST",
            body: JSON.stringify({text: comment, userId: 1, postId: postId.id }),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            }
        })
        const response = await request.json();
        console.log(response);
        getComments();

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="comment">Enter your comment</label>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    )
}