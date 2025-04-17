import {Link, useLoaderData} from "react-router-dom"
import Header from "./Header";
import styles from "../styles/posts.module.css"

export default function Posts() {
    const  posts  = useLoaderData();
    return (
        <>
            <Header/>
        <ul className={styles.container}>
                {posts.map((post) => (
                <Link  key={post.id} to={`/posts/${post.id}`}>
                    <li className={styles.postCard}>
                        <h1 className={styles.title}>{post.title}</h1>
                        <p className={styles.description}>{post.text}</p>
                        <h4 className={styles.postAuthor}>{post.user.username}</h4>
                    </li>
                </Link>
            ))}
        </ul>
        </>
       
    )
}