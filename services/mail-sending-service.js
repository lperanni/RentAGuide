import nodemailer from 'nodemailer';

export default async function send(messageObj, res) {

  const body = await messageObj;

  let transporter = nodemailer.createTransport({
      host: process.env.APP_MAIL_HOST,
      port: 587,
      secure: false, 
      auth: {
          user: process.env.APP_MAIL_USER,
          pass: process.env.APP_MAIL_PASSWORD 
      }
  });

 await transporter.sendMail({
      from: body.email ,// sender address
      to: process.env.APP_MAIL_ADDRESS, // list of receivers
      subject: body.subject, // Subject line
      text: body.message // plain text body
  }).then(() => res.send('Message sent'))
    .catch(err => console.log(err));
}
