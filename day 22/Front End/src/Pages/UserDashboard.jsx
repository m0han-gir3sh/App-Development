import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import '../Assets/css/UserDashboard.css'
import Sidebar from '../Components/Sidebar'
import { Link, useNavigate } from 'react-router-dom'; 

function UserDashboard() {
    const user=useSelector(selectUser)
    const nav=useNavigate();
    const founders = [
        {
          role: 'SUBJECTS',
          bio: 'Assign subjects to specific classes or courses. Track subject enrollment status.',
          image: "https://res.cloudinary.com/dfrc94azr/image/upload/v1695491921/wired-lineal-112-book-morph_veq6fb.gif",
          path : "/subjects",
          
        },
        {
            role: 'MARKS',
            bio: 'Capability to record marks subject-wise. Customizable grade scales and criteria.',
            image: 'https://res.cloudinary.com/dfrc94azr/image/upload/v1695492027/wired-lineal-56-document_ebulpn.gif', 
            path : "/marks",
        },
    ];
    const founderss = [
        {
          role: 'FEES',
          bio: 'Define fee structures for different classes, courses, or programs. Include details such as student name, fee amount, and payment date.',
          image: "https://res.cloudinary.com/dfrc94azr/image/upload/v1695492625/wired-lineal-298-coins_j3ovoi.gif",
          path : "/fees",
        },
        {
            role: 'ATTENDANCE',
            bio: 'Record daily attendance for students. View attendance trends and statistics. Synchronize attendance data with class schedules.',
            image: 'https://res.cloudinary.com/dfrc94azr/image/upload/v1695492666/wired-lineal-471-ebook-reader_yhxcj8.gif', 
            path : "/attendance",
        },
    ];
    const handleClick =(path)=>{
        if(path==="/subjects"){
            nav('/subjects')
        }
        if(path==="/marks"){
            nav('/marks')
        }
        if(path==="/fees"){
            nav('/fees')
        }
        if(path==="/attendance"){
            nav('/attendance')
        }
    }
    return (
        <>
    
        <Sidebar/>
        <div className='overz'>
            <div className='headingz'>
                <h1>Welcome <span className=' username-colorz'>{user?.email} </span></h1>
                <Link className='homebtnnZ' to="/">LOGOUT</Link>
                
                
            </div>
            <div className="containerz">
                <h2><b>DASHBOARD</b></h2>
            </div>
        </div>
        <div className='overallz'>
        <section className="about-sectionz">
                <div className="rowwz">
                {founders.map((founder, index) => (
                    <div key={index} className="col-lg-4z">
                    <div className="founder-cardz">
                        <img src={founder.image} alt={founder.name} className="founder-imagez" />
                        <h3>{founder.name}</h3>
                        <p className="founder-rolez">{founder.role}</p>
                        <p className="founder-bioz">{founder.bio}</p>
                        <button className="founder-button1z" onClick={()=>handleClick(founder.path)}>{founder.role}</button>
                    </div>
                </div>
                ))}
        <div>
        </div>
        </div>
        </section>
        <section className="about-section1z">
            <div className="container1z">
                <div className="roww1z">
          
                {founderss.map((founder, index) => (
                    <div key={index} className="col-lg-41z">
                    <div className="founder-card1z">
                        <img src={founder.image} alt={founder.name} className="founder-image1z" />
                        <h3>{founder.name}</h3>
                        <p className="founder-role1z">{founder.role}</p>
                        <p className="founder-bio1z">{founder.bio}</p>
                        
                        <button className="founder-button1z" onClick={()=>handleClick(founder.path)}>{founder.role}</button>
                    </div>
                </div>
                ))}
            </div>
        <div>
        </div>
        </div>
        </section>
        </div>
        </>
    )
}

export default UserDashboard;









