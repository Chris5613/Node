import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/profile';
import Nav from './components/Nav';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
