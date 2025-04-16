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
        <h1>Explore all the <Link to="/posts">Posts</Link></h1>
        <h1>Welcome to my personal Blog {user.username}</h1>
      </> 
        :
        <>
          
          <h2 className="home-title">Hello and welcome to my personal blog</h2>
          <h3 className="posts"><Link class="link" to="/posts">Explore all posts</Link></h3>
        </>
      }
    </>
  )
}

export default App
