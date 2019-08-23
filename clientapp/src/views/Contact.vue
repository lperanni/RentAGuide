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
      <v-col lg="8">
        <v-card elevation="10" class="pa-4">
          <v-form>
            <v-text-field outlined clearable label="Subject"></v-text-field>
            <v-textarea class="pa-0" outlined no-resize label="Message"></v-textarea>
            <v-btn class="success" block>Send</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
