import { useContext } from "react"
import { Link } from "react-router-dom";
import Header from "./components/Header"
import Auth from "./components/AuthContext";

function App() {
  const { user } = useContext(Auth.Context);
  return (
    <>
      <Header />
      {user ? <>
        <h1 className="home-title">Explore all the <Link className="link" to="/posts">Posts</Link></h1>
        <h1 className="posts">Welcome to my personal Blog {user.username}</h1>
      </> 
        :
        <>
          
          <h2 className="home-title">Hello and welcome to my personal blog</h2>
          <h3 className="posts"><Link className="link" to="/posts">Explore all posts</Link></h3>
        </>
      }
    </>
  )
}

export default App
