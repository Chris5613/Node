import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
