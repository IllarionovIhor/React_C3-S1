import { Link } from "react-router-dom";

export default function Home({user, setUser}){

    const handleLogin = () =>{
        setUser(true);
    }
    const handleLogout = () =>{
        setUser(false);
    }

    return <div>
        <h1>Home!</h1>
        <h2>No secret info here!</h2>
        <button onClick={handleLogout}>Log out the user!</button>
        <button onClick={handleLogin}>Log in the user!</button>
        <Link to={"/message"}>
            Check the message
        </Link>
    </div>
}