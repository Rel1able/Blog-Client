import {Link, useLoaderData} from "react-router-dom"
import Header from "./Header";
import styles from "../styles/posts.module.css"

export default function Posts() {
    const  posts  = useLoaderData();
    return (
        <>
            <Header/>
        <ul className={styles.container}>
                {posts.map((post, id) => (
                <Link to={`/posts/${post.id}`}>
                    <li className={styles.postCard} key={id}>
                        <h1 className={styles.title}>{post.title}</h1>
                        <p className={styles.description}>{post.text}</p>
                    </li>
                </Link>
            ))}
        </ul>
        </>
       
    )
}