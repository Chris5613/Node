import { useState, useEffect } from "react"

const Main = () => {

  const token = localStorage.getItem('jwt')
  const [loggedIn, setLoggedIn] = useState(false)

  // set the useeffect to check if the token is in local storage every 6 seconds 
  useEffect(() => {
      setInterval(() => {
        if (token) {
          setLoggedIn(true)
        }
      }, 1000)
  }, [token])


  return (
    <>
    <div className='main'>   
      {loggedIn ? (
        <>
          <h1 className='front-text'>You are Logged in!</h1>
          <h3 className='front-text text'>Token: {token}</h3>
        </>
      ) : (
        <>
          <h1 className='front-text'>User Authorization with Node.js and React</h1>
          <h2 className='front-text'>Please Login or Signup</h2>
        </>
      )}
    </div>
      </>
  )
}

export default Main