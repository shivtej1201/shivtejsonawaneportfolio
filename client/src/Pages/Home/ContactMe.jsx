// export default function ContactMe() {
//   return (
//     <section id="Contact" className="contact--section">
//       <div>
//         <p className="sub--title">Get In Touch</p>
//         <h2>Contact Me</h2>
//         <p className="text-lg">Hi 👋, I'm Shivtej here</p>
//       </div>
//       <form className="contact--form--container">
//         <div className="container">
//           <label htmlFor="first-name" className="contact--label">
//             <span className="text-md">First Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="first-name"
//               id="first-name"
//               required
//             />
//           </label>
//           <label htmlFor="last-name" className="contact--label">
//             <span className="text-md">Last Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="last-name"
//               id="last-name"
//               required
//             />
//           </label>
//           <label htmlFor="email" className="contact--label">
//             <span className="text-md">Email</span>
//             <input
//               type="email"
//               className="contact--input text-md"
//               name="email"
//               id="email"
//               required
//             />
//           </label>
//           <label htmlFor="phone-number" className="contact--label">
//             <span className="text-md">Phone Number</span>
//             <input
//               type="number"
//               className="contact--input text-md"
//               name="phone-number"
//               id="phone-number"
//               required
//             />
//           </label>
//         </div>
//         <label htmlFor="message" className="contact--label">
//           <span className="text-md">Message</span>
//           <textarea
//             className="contact--input text-md"
//             id="message"
//             rows="8"
//             placeholder="Type your message..."
//           />
//         </label>
//         <label htmlFor="checkboc" className="checkbox--label">
//           <input type="checkbox" required name="checkbox" id="checkbox" />
//           <span className="text-sm">I accept the terms</span>
//         </label>
//         <div>
//           <button className="btn btn-primary contact--form--btn">Submit</button>
//         </div>
//       </form>
//     </section>
//   );
// }

// Client-side code (React)
// import React, { useState } from "react";

// const ContactMe = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/send-email", {
//         // Updated URL
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, message }),
//       });
//       const data = await response.json();
//       setResponseMessage(data.message);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <section id="Contact" className="contact--section">
//       <div>
//         <p className="sub--title">Get In Touch</p>
//         <h2>Contact Me</h2>
//         <p className="text-lg">Hi 👋, I'm Shivtej here</p>
//       </div>
//       {responseMessage && <p>{responseMessage}</p>}
//       <form className="contact--form--container" onSubmit={handleSubmit}>
//         <label htmlFor="email" className="contact--label">
//           <span className="text-md">Email</span>
//           <input
//             type="email"
//             className="contact--input text-md"
//             name="email"
//             id="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <label htmlFor="message" className="contact--label">
//           <span className="text-md">Message</span>
//           <textarea
//             className="contact--input text-md"
//             id="message"
//             name="message"
//             rows="8"
//             placeholder="Type your message..."
//             required
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//         </label>
//         <div>
//           <button type="submit" className="btn btn-primary contact--form--btn">
//             Submit
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default ContactMe;

import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    checkbox: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://shivtejsonawaneportfolio.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      Swal.fire({
        title: "Thank You For Enquiry",
        text: "Email sent successfully",
        icon: "success",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Failed to send email",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title"></p>
        <h2>Get In Touch</h2>
        <p className="text-lg">Let's Start a Conversation 👨‍💻</p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phoneNumber"
              id="phone-number"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input
            type="checkbox"
            required
            name="checkbox"
            id="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
          <span className="text-sm">I accept the terms</span>
        </label>

        <div>
          <button
            type="submit"
            className="btn btn-primary contact--form--btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
