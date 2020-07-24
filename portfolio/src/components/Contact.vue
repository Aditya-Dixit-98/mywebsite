<template>
<v-container class="pa-0" fluid style="background:#1E1F26">
  <div class="text-center ma-2">
          </div>
  <section
    id="get-in-touch"
    class="overflow-hidden"
  >
    <v-row
      class="#D0E1F9 white--text"
      no-gutters
    >
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/codeblue.jpg')"
          height="100%"
        />
      </v-col>

      <v-col
        class="pa-5"
        cols="12"
        md="6"
      >
        <v-alert type="info"><span>if your screen is covered with 1's and 0's I have recieved your message just click anywhere</span></v-alert>
        <h2 class="mb-5 white--text">
          Get In Touch
        </h2>

        <v-sheet
          color="transparent"
          max-width="600"
        >
        <v-form ref="form">
          <v-text-field
            color="info"
            label="Name"
            solo
            flat
            :rules="nameRules"
            v-model="name"
            required
          />

          <v-text-field
            color="info"
            label="Email"
            solo
            flat
            :rules="emailRules"
            v-model="email"
            required
          />

          <v-text-field
            color="info"
            label="Subject"
            solo
            flat
            :rules="subjectRules"
            v-model="subject"
            required
          />

          <v-textarea
            label="Message"
            solo
            flat
            counter
            :rules="messageRules"
            v-model="message"
            required
          />

          <v-btn rounded @click="validate()">Send</v-btn>
        </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </section>
</v-container>
</template>

<script>
  export default {
    name: 'Contact',
    data:() => ({
      data:[],
      name:'',
      subject:'',
      email:'',
      message:'',
      snackset:false,
      nameRules:[
        v=> !!v|| "Name is Required ",
      ],
      emailRules:[
        v=> !!v|| "Email is Required ",
      ],
      messageRules:[
        v=> !!v|| "Message is Required ",
      ],
      subjectRules:[
        v=> !!v|| "Subject is Required ",
      ],
    }),
    methods:{ 
      validate(){
        if(this.$refs.form.validate()){
        console.log("inside validate")
        this.$vuetify.goTo('#intro')
        let data={'name':this.name,'subject':this.subject,'email':this.email,'message':this.message}
        this.$store.dispatch('send',data)
        }
      }
    }
  }
</script>