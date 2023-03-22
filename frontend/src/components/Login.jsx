import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(false)

    async function handleSubmit(e) {
		e.preventDefault();
		const res = await fetch('https://backend-auth-f8lj.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        const data = await res.json()
        console.log(data)
        localStorage.setItem('jwt', data.token)
	}
    const navigate = useNavigate();
    const onAlert = () => {
        setAlert(true)
        setTimeout(() => {
            navigate('/')
    }, 2000)
    }
return (
    <>
    <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
            <h3>
                <strong>Member Login</strong>
            </h3>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className=" login-btn" onClick={onAlert}>
                Submit
            </button>
            {alert && <div className="alert alert-success alerts" role="alert">
            You have Logged in! Now trying logging out.
            </div>} 
            <div className="login-link">
                <a href="signup">Don't have a account? Sign up</a>
            </div>
        </form>
    </div>
</>
)
}

export default Login