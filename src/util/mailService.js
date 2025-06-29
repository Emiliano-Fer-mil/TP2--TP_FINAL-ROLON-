import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
host: "smtp.mailtrap.io",
port: 2525,
  auth: {
    user: "dda9c0323c2ad7",
    pass: "e104642111757b"
      
  }
});

export const sendMail = async ({ to, subject, text }) => {
  await transporter.sendMail({
    from: `"TP2" <dda9c0323c2ad7@inbox.mailtrap.io>`,
    to,
    subject,
    text
  });
};