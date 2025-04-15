import { useContext } from "react"
import { Link } from "react-router-dom";
import Header from "./components/Header"
import Auth from "./components/AuthContext";

function App() {
  const {user} = useContext(Auth.Context);
  return (
    <>
      <Header user={user} />
      <h1>Welcome to my personal Blog</h1>
      <h2><Link to="/sign-up">Sign up</Link> if you want to be able to leave comments to the posts</h2>
    </>
  )
}

export default App
