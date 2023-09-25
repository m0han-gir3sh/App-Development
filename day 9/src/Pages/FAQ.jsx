import React from 'react';
import '../Assets/css/FAQ.css'

function FAQ() {
  return (
    <div className="faq-container">
      <div className="faq-title">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faq-questions">
        
        <div className="faq-question">
          <h3>Q1: How do I log in to my student account?</h3>
          <p>
            To log in, visit the SIMS login page and enter your username and password. If you encounter any issues, use the 'Forgot Password' option or contact our support team.
          </p>
        </div>

        <div className="faq-question">
          <h3>Q2: How can I view my attendance record?</h3>
          <p>
            After logging in, navigate to the 'Attendance' section in your student dashboard. There, you can view your attendance history and details for each course.
          </p>
        </div>

        <div className="faq-question">
          <h3>Q3: Can I update my contact information?</h3>
          <p>
            Yes, you can update your contact information in the 'Profile' or 'Settings' section of your student account. Make sure to save the changes once updated.
          </p>
        </div>

        <div className="faq-question">
          <h3>Q4: How are exam results calculated?</h3>
          <p>
            Exam results are calculated based on your performance in assessments and exams. You can view your marks and overall percentage in the 'Grades' section.
          </p>
        </div>

        <div className="faq-question">
          <h3>Q5: What should I do if I face technical issues?</h3>
          <p>
            If you encounter technical issues while using SIMS, please reach out to our technical support team via the 'Support' or 'Contact Us' page. They will assist you in resolving any problems.
          </p>
        </div>

        <div className="faq-question">
          <h3>Q6: How can I pay my fees online?</h3>
          <p>
            To pay your fees online, go to the 'Payments' section and select the desired payment method. Follow the instructions to complete the payment securely.
          </p>
        </div>

        <div className="faq-question">
          <h3>Q7: What do I do if I forget my password?</h3>
          <p>
            If you forget your password, click on the 'Forgot Password' link on the login page. You will receive instructions on resetting your password via email.
          </p>
        </div>

        <div className="faq-question">
          <h3>Q8: How can I check my class schedule?</h3>
          <p>
            Your class schedule can be found in the 'Schedule' or 'Timetable' section of your student dashboard. It displays your classes, timings, and locations.
          </p>
        </div>

        <div className="faq-question">
          <h3>Q9: Can I request a leave of absence?</h3>
          <p>
            Yes, you can request a leave of absence by submitting an application through the 'Leave Request' feature. Please provide a valid reason and await approval.
          </p>
        </div>

        <div className="faq-question">
          <h3>Q10: How do I access study materials?</h3>
          <p>
            Study materials and resources for your courses are available in the 'Resources' or 'Materials' section. You can download or access them from there.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default FAQ;
