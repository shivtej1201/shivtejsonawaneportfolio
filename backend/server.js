// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// app.post("/send-email", async (req, res) => {
//   const { firstName, lastName, email, phoneNumber, message } = req.body;

//   let transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: "shivatejsonawane3149@gmail.com",
//       pass: "zbhd smdn lpsb sijl",
//     },
//   });

//   let mailOptions = {
//     from: "shivatejsonawane3149@gmail.com",
//     to: "sonawaneshivtej12@gmail.com",
//     subject: "New Contact Form Submission",
//     text: `
//       First Name: ${firstName}
//       Last Name: ${lastName}
//       Email: ${email}
//       Phone Number: ${phoneNumber}
//       Message: ${message}
//     `,
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

// Set up OAuth2 authentication
let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user: "shivatejsonawane3149@gmail.com", // Your Gmail address
    clientId:
      "125764376452-8ng9ua3tms82tihdfl44mueco0qbtugl.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//0459SMKDCnxKoCgYIARAAGAQSNwF-L9Ir1ryoM7f4h5GFCBCeMnyS0PWPHixzRuo_kLq3KaBmq-DgAWhtCfQUc9KGgXvx8ZpPapo",
    accessToken:
      "ya29.a0Ad52N393C-iS3ShyJaTUsEngkekQrv54ma53pT16MagiVvfXjwxqINecuVzIopG9X3g-AVX39tRe_XEDm3QZbTlKdSOFH6GrezsngmL4mpHnnCrh_KcjikyeWX8nMohC_A-SWU50gCdi2VoeJHs0ai7xaJAxjHK-89wIaCgYKAZkSARESFQHGX2MiyBT4wraYfYZiVhMGat3EOw0171", // optional
  },
});

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  let mailOptions = {
    from: "shivatejsonawane3149@gmail.com",
    to: "sonawaneshivtej12@gmail.com", // Your email address
    subject: "New Contact Form Submission",
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}
    `,
  };

  let userMailOptions = {
    from: "shivatejsonawane3149@gmail.com",
    to: email, // User's email address
    subject: "Copy of Your Contact Form Submission",
    text: `
      Thank you for your enquiry. Here is a copy of the information you submitted:
      
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}
    `,
  };

  try {
    // Send email to your email address
    await transporter.sendMail(mailOptions);
    console.log("Email sent to you:", mailOptions);

    // Send email to user's email address
    await transporter.sendMail(userMailOptions);
    console.log("Email sent to user:", userMailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
