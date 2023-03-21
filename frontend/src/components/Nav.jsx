import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Nav = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const token = localStorage.getItem('jwt')
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            setLoggedIn(true)
        }
    }, [token])

    const logout = async () => {
        const url = "http://localhost:3001/signout";
        const response = await fetch(url, {
            method: "PUT",
        });
        if (response.ok) {
            setLoggedIn(false);
            localStorage.clear()
            navigate('/login')
        }
    }
return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">User Auth</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                {loggedIn ? (
                    <ul className="navbar-nav">
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