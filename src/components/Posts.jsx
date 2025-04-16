import {Link, useLoaderData} from "react-router-dom"
import Header from "./Header";

export default function Posts() {
    const  posts  = useLoaderData();
    return (
        <>
            <Header/>
             <h1>Posts</h1>
        <ul>
            {posts.map((post, id) => (
                <li key={id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
        </>
       
    )
}