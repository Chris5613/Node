import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

const Nav = ({token}) => {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if (token) {
            setLoggedIn(true);
            console.log("token", token)
        }
    }, [token]);
    

    const logout = async () => {
        const url = "http://localhost:3001/logout";
        const response = await fetch(url, {
            method: "DELETE",
            credentials: "include",
        });
        if (response.ok) {
            setLoggedIn(false);
        }
    }

return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">User-Auth</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                {loggedIn ? (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink token={token} className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" onClick={logout}>Logout</NavLink>
                        </li>
                    </ul>
                    ) : (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Signup</NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    </div>
    )
}

export default Nav