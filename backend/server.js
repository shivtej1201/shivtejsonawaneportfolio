// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");
// const cors = require("cors"); // Add this line

// const app = express();
// const PORT = 5000;

// app.use(cors()); // Use cors middleware

// app.use(bodyParser.json());

// app.post("/send-email", async (req, res) => {
//   const { email, message } = req.body;

//   let transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: "shivatejsonawane3149@gmail.com",
//       pass: "zbhd smdn lpsb sijl",
//     },
//   });

//   let mailOptions = {
//     from: "shivatejsonawane3149@gmail.com",
//     to: email,
//     subject: "Test Email",
//     text: message,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to send email" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "shivatejsonawane3149@gmail.com",
      pass: "zbhd smdn lpsb sijl",
    },
  });

  let mailOptions = {
    from: "shivatejsonawane3149@gmail.com",
    to: "sonawaneshivtej12@gmail.com",
    subject: "New Contact Form Submission",
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
