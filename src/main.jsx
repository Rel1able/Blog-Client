import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import Posts from "./components/Posts.jsx";
import SinglePost from "./components/SinglePost.jsx";
import Auth from './components/AuthContext.jsx'

async function postsLoader() {
            const posts = await fetch("https://blog-api-rrvr.onrender.com/posts/published");
            const data = await posts.json();
            console.log(data);
            return data
}

async function postLoader({ params }) {
  const postId = params.id;
  const postRes = await fetch(`https://blog-api-rrvr.onrender.com/posts/${postId}`);
  const post = await postRes.json();
  return post
  
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/posts",
    element: <Posts />,
    loader: postsLoader
  },
  {
    path: "/posts/:id",
    element: <SinglePost />,
    loader: postLoader
  }
  
])

createRoot(document.getElementById('root')).render(
  <Auth.Provider>
    <RouterProvider router={router} />
  </Auth.Provider>,
)
