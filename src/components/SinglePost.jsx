import { useParams, useLoaderData, Link} from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CreateComment from "./CreateComment";
import Header from "./Header";
import Auth from "./AuthContext";
import styles from "../styles/singlepost.module.css";

export default function SinglePost() {
    const postId = useParams();
    const post = useLoaderData();
    const [comments, setComments] = useState([]);
    const { user,  token} = useContext(Auth.Context);
    async function getComments() {
            const response = await fetch(`https://blog-api-rrvr.onrender.com/posts/${postId.id}/comments`);
        const commentsData = await response.json();
        console.log(commentsData)
            setComments(commentsData);
        }
    useEffect(() => {
        getComments()
    }, [])
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1>{post.title}</h1>
                <h2 className={styles.description}>{post.text}</h2>
                {user ? <CreateComment token={token} getComments={getComments} /> : 
                <h1>Want to join the conversation? <Link className={styles.link} to="/login">Login</Link></h1>}
                <h1>Comments</h1>
                <ul className={styles.comments}>
                    {comments.map((comment, id) => (
                        <li className={styles.comment} key={id}>
                            <h4>{comment.userId}</h4>
                            <p>{comment.text}</p>
                            
                        </li>
                    ))}
                </ul>
            </div>
            
            
           
        </>

    )
}