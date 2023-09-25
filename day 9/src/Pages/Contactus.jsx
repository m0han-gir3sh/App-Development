import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom"; 
import "../Assets/css/Contactus.css";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8lq6xeo",
        "template_388f0hq",
        form.current,
        "0sMhJM4StUpyY0qAr"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message has been sent");
        },
        (error) => {
          console.log(error.text);
          alert("Message has not been sent");
        }
      );
  };

  return (
    <div className="main-contact">
      <div className="contact-container1">
        <div className="TitleContact">
          <h1>Contact Us</h1>
        </div>
            <div className="contact-img1"><img
          src="https://res.cloudinary.com/dnngdn8ev/image/upload/v1695534347/wired-lineal-177-envelope-mail-send_cs1pis.gif"
          alt="Description of the image"
        /></div>
      </div>
    <div className="contact-container2">
      
      <div className="contact-container">

      <h2>Send me a message</h2>
      <p>
        Feel free to get in touch with me with anything related to Web Development or you can just say hi. I will get back to you as soon as possible.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="wrapper">
          <input type="text" name="name" placeholder="Your name" />
          <div className="gradient-bg"></div>
        </div>
        <div className="wrapper">
          <input type="email" name="user_email" placeholder="Email address" />
          <div className="gradient-bg"></div>
        </div>
        
        <div className="wrapper wrapper-big">
          <textarea name="message" placeholder="Message"></textarea>
          <div className="gradient-bg"></div>
            
        </div>
        <buttonn className="submitcontact" type="submit">Send</buttonn>
      </form>

       
     
      <Link className='homebtnn' to="/home">Go back to Home</Link>

    </div>
      </div>
    </div>
  );
};

export default Contactus;

// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import "../Assets/css/Contactus.css";

// const Contactus = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_8lq6xeo",
//         "template_388f0hq",
//         form.current,
//         "0sMhJM4StUpyY0qAr"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("Message has been sent");
//         },
//         (error) => {
//           console.log(error.text);
//           alert("Message has not been sent");
//         }
//       );
//   };

//   return (
//     <div className="contact-container">
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="name" className="contact-input" />
//         <label>Email</label>
//         <input type="email" name="user_email" className="contact-input" />
//         <label>Message</label>
//         <textarea name="message" className="contact-textarea"></textarea>
//         <input type="submit" value="Send" className="contact-button" />
//       </form>
//     </div>
//   );
// };

// export default Contactus;
