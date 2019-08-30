import axios from 'axios';

export default class Message {
  constructor(sender, subject, message) {
    this.sender = sender;
    this.subject = subject;
    this.message = message;
  }

  send() {
    axios.post(`${process.env.VUE_APP_BASE_URL}/util/send`, {
      email: this.sender,
      subject: this.subject,
      message: this.message,
    }).then(() => console.log('Message sent'))
      .catch(err => console.log(err));
  }
}
