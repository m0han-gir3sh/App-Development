import React from 'react';
import '../Assets/css/Home.css'
import { Link } from 'react-router-dom'; 

function HomePage() {
  return (
    <div className="homepage">
      <main className="main-content">
        <section className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="intro-message">
                  <h1>The Perfect page for Student Information Management System.</h1>
                  <h3>Explore your options.</h3>
                  <ul>
                    <li>Attendance</li>
                    <li>Marks Alloted</li>
                    <li>Behaviour Management</li>
                    <li>Subjects Alloted</li>
                  </ul>
                  <div className="intro-buttons">
                    <Link to="/login" className="btn btn-primary">Go to Dashboard</Link>
                  </div>
                  
                </div>
                </div>



              <div className="col-lg-4"></div>
            </div>
          </div>
        </section>
                <div className="intro-section2">
                <div className="intro-message2">
                  <h1>ABOUT US</h1>
                  
               
                  <h3>HERE, YOU'LL FIND A BRIEF OVERVIEW OF WHO WE ARE AND WHAT WE DO.

            <br></br><br></br>
            
            For more detailed information about our history, mission, and team, please click the Link here.</h3>
                  
                  <div className="intro-buttons2">
                    <Link to="/about" className="btn2">ABOUT US</Link>
                  </div>
                  
                </div>
              </div>
                <div className="intro-section3">

                <div className="intro-message3">
                  <h1>CONTACT US</h1>
                  <img
          src="https://res.cloudinary.com/dnngdn8ev/image/upload/v1695579224/wired-lineal-981-consultation_clmv6w.gif"
          alt="Description of the image"
        />
                  
                
            
               
                  <h3>Welcome to our "Contact Us" page. Here, you'll find information on how to get in touch with us.
            
            For specific contact details and inquiries, please click the  "Contact Us" button.</h3>
                  
                  <div className="intro-buttons3">
                  
                  <Link to="/contact">
                  
                    <div className='buttonn'>
                    <span >Contact Us</span>
                    <span >Contact Us</span>
                    </div>
                  
                </Link>
                  </div>
                  
                </div>
              </div>
      </main>
    </div>
  );
}

export default HomePage;
