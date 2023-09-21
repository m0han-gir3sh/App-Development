import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contactus from '../Pages/Contactus';
import Attendance from '../Pages/Attendance';
import Marks from '../Pages/Marks';
import Subjects from '../Pages/Subjects';
import Dashboard from "../Pages/Dashboard";
import NavBar from "../Components/Navbar";
import Footer from '../Components/Footer';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
        <Routes>
          <Route path="/home" element={<><NavBar/><Home/></>} />
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<><NavBar/><About/></>} />
          <Route path="/contact" element={<><NavBar/><Contactus/></>} />
          <Route path="/dashboard" element={<><NavBar/><Dashboard/></>} />
          <Route path="/attendance" element={<><NavBar/><Attendance/></>} />
          <Route path="/marks" element={<><NavBar/><Marks/></>} />
          <Route path="/subjects" element={<><NavBar/><Subjects/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;