<template>
  <v-container class="mt-5 px-4">
    <v-row>
      <v-col cols=12><p class="subtitle-1 grey--text">Contact</p></v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p class="subtitle-1">Ask as any questions you have. We are happy to help you out however we can.</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="12">
        <v-card elevation="10" class="pa-4">
          <v-form>
            <v-text-field outlined clearable label="Subject" v-model="subject"></v-text-field>
            <v-textarea class="pa-0" outlined no-resize height="350" label="Message" v-model="message"></v-textarea>
            <v-btn class="success" block @click="sendMessage">Send</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Message from '../libs/send';


export default {
  data() {
    return {
      subject: '',
      message: '',
      userMail: this.$store.state.user.email,
    };
  },
  methods: {
    sendMessage() {
      // Uncomment if you want to use the mailing service and have configured the .env variables accordingly

      // const mailToSend = new Message(this.userMail, this.subject, this.message);
      // mailToSend.send();
      alert('Message sent');
      this.$router.push('/');
    },
  },
};
</script>
