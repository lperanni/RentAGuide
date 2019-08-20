import nodemailer from 'nodemailer';

export async function send(recipient) {

  let transporter = nodemailer.createTransport({
      host: process.env.APP_MAIL_HOST,
      port: 587,
      secure: false, 
      auth: {
          user: process.env.APP_MAIL_USER,
          pass: process.env.APP_MAIL_PASSWORD 
      }
  });

  let info = await transporter.sendMail({
      from: process.env.APP_MAIL_ADDRESS, // sender address
      to: 'bar@example.com, baz@example.com', // list of receivers
      subject: 'Password Change', // Subject line
      text: 'Did you request a password change? If yes click on the following link?', // plain text body
      html: '<b>Hello world?</b>' // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

send().catch(console.error);