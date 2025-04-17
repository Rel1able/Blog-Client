import { useState} from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/singlepost.module.css";
export default function CreateComment({token, getComments}) {

    const postId = useParams();
    const user = JSON.parse(localStorage.getItem("user"));

    const [comment, setComment] = useState("");

    async function handleSubmit(e) {
        console.log(token);
        e.preventDefault();
        const request = await fetch(`https://blog-api-rrvr.onrender.com/posts/${postId.id}/comments`, {
            method: "POST",
            body: JSON.stringify({text: comment, userId: user.id, postId: postId.id }),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            }
        })
        const response = await request.json();
        console.log(response);
        getComments();
        setComment("");

    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="comment">Enter your comment</label>
            <textarea className={styles.commentArea} value={comment} cols="30" rows="5" onChange={e => setComment(e.target.value)}></textarea>
            <button className={styles.btn} type="submit">Add</button>
        </form>
    )
}