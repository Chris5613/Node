import { useState } from "react"
import Nav from './Nav';
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.username = username;
    data.password = password;
    const res = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if(res.ok) {
      const data = await res.json();
      console.log(data);
    }
  };

  const onAlert = () => {
    setAlert(true)
  }
  return (
  <section>
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h3><strong>Member Signup</strong></h3>
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
            You have successfully signed up! Now try logging in.
          </div>}         
        <div className="login-link">
          <a href="login">Already have an account? Login</a>
        </div>
      </form>
    </div>
  </section>

  )
}

export default Signup