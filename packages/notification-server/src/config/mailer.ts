
import nodemailer from "nodemailer"

var transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465, 
  secure: false,
  auth: {
      user:process.env.EMAIL_USER,
      pass:process.env.EMAIL_PASS
  },
});
export const sendEmail = async (to: string, subject: string, html: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER ,
    to,
    subject,
    html,
  };

  try {
    const send=await transporter.sendMail(mailOptions);
  } catch (error) {
  }
};

