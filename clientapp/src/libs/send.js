import axios from 'axios';

export default class Message {
  constructor(sender, subject, message) {
    this.sender = sender;
    this.subject = subject;
    this.message = message;
  }

  send() {
    axios.post('http://localhost:5000/api/util/send', {
      email: this.sender,
      subject: this.subject,
      message: this.message,
    }).then(() => alert('Message sent'))
      .catch(err => console.log(err));
  }
}
