const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

let savedOTP = "";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "halderoindrila433@gmail.com",
    pass: "adccnpwuumoilrid"
  }
});

router.get("/test", (req, res) => {
  res.json({ message: "Backend working ✅" });
});

router.post("/login", async (req, res) => {

  const { email } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000);

  savedOTP = otp;

  const mailOptions = {
    from: "halderoindrila433@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}`
  };

  try {
    await transporter.sendMail(mailOptions);

    res.json({ message: "OTP sent to email" });

  } catch (err) {

    console.error(err);
    res.json({ message: "Email sending failed" });

  }

});

router.post("/verify", (req, res) => {

  const { otp } = req.body;

  if (otp == savedOTP) {
    res.json({ message: "OTP verified ✅" });
  } else {
    res.json({ message: "Invalid OTP ❌" });
  }

});

module.exports = router;