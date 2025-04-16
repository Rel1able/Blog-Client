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
          
      <h2><Link to="/sign-up">Sign up</Link> if you want to be able to leave comments to the posts</h2>
        </>
      }
    </>
  )
}

export default App
