import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
		e.preventDefault();
		const res = await fetch('http://localhost:3001/login', {
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
            <button className=" login-btn">
                Submit
            </button>
            <div className="login-link">
                <a href="signup">Don't have a account? Sign up</a>
            </div>
        </form>
    </div>
    <div className="ghost"></div>
</>

  )
}

export default Login