import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "../Components/Navbar";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import About from '../Pages/About';
import Contactus from '../Pages/Contactus';
import Dashboard from "../Pages/Dashboard";
import Attendance from "../Pages/Attendance";
import Marks from "../Pages/Marks";
import Subjects from "../Pages/Subjects";
import styled from "styled-components";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer"
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import TandC from '../Pages/TandC';
import FAQ from '../Pages/FAQ';
import Fees from '../Pages/Fees';


const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<><NavBar/><Home/><Footer/></>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<><NavBar/><About/><Footer/></>} />
          <Route path="/contact" element={<><NavBar/><Contactus/><Footer/></>} />
          <Route path="/privacypolicy" element={<><NavBar/><PrivacyPolicy/><Footer/></>} />
          <Route path="/terms-and-conditions" element={<><NavBar/><TandC/><Footer/></>} />
          <Route path="/FAQ" element={<><NavBar/><FAQ/><Footer/></>} />

          
            
                <Route path="/dashboard" element={<><NavBar/><Sidebar/><Dashboard/><Footer/></>} />
                <Route path="/attendance" element={<><NavBar/><Sidebar/><Attendance/></>} />
                <Route path="/marks" element={<><NavBar/><Sidebar/><Marks/></>} />
                <Route path="/subjects" element={<><NavBar/><Sidebar/><Subjects/></>} />
                <Route path="/fees" element={<><NavBar/><Sidebar/><Fees/></>} />
              
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;