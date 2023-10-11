// import React from 'react'
// import '../Assets/css/Leftbar.css';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logout } from '../redux/userSlice';
// import Button from '@mui/material/Button';

// function Leftbar() {

//     const dispatch= useDispatch();
//     const navigate=useNavigate();

// const dashboardHandler = ()=>{
//     navigate('/dashboard')
// }
// const attendanceHandler = ()=>{
//     navigate('/attendance')
// }
// const marksHandler = () =>{
//     navigate('/marks')
// }
// const subjectsHandler = () =>{
//     // dispatch(logout())
//     navigate('/subjects')
// }
// // const logoutHandler = () =>{
// //     dispatch(logout())
// //     navigate('/logout')
    
// // }
//     return (
//         <>
//             <div className='leftbar-container'>
//                 <div className='left-bar-container flex flex-col items-start px-3 mt-5 gap-10'>
//                     {/* <button className='text-xl' variant="contained" onClick={dashboardHandler}>
//                         Dashboard
//                     </button> */}
//                     <button  className='text-xl'  variant="contained" onClick={attendanceHandler}>
//                         Attendance
//                     </button>
//                     <button  className='text-xl'  variant="contained" onClick={marksHandler}>
//                         Marks
//                     </button>
//                     <button className='text-xl' variant="contained" onClick={subjectsHandler}>
//                         Subjects
//                     </button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Leftbar