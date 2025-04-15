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
    element: <Posts/>
  },
  {
    path: "/posts/:id",
    element: <SinglePost/>,
  }
  
])

createRoot(document.getElementById('root')).render(
  <Auth.Provider>
    <RouterProvider router={router} />
  </Auth.Provider>,
)
