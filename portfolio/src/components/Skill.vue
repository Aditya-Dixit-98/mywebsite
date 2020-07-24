<template>
<v-container fluid class="pa-0" style="background:#4D648D">
<section>

      <section id="skills">
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">How can I help You!</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ text, title }, i) in articles"
              :key="i"
              cols="12"
              md="4"
            >
            <v-card color="grey darken-3">
              <v-card-title
                class="font-weight-black mb-2 text-uppercase"
                v-text="title"
              ></v-card-title>

              <v-card-text
                class="title font-weight-light mb-2"
                v-text="text"
              ></v-card-text>
            </v-card>
            </v-col>
          </v-row>
        </v-container>
        <h2 class="display-1 font-weight-bold mb-1 text-uppercase text-center">Skills</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

            <v-row>
            <v-col
              v-for="({ value, title }, i) in languages"
              :key="i"
              class="ml-4"
            >
            <v-row no-gutters>
                <v-col>
             <v-progress-circular
                :rotate="360"
                :size="65"
                :width="15"
                :value="value"
                color="white"
                
            >
                {{ value }}
            </v-progress-circular>
            <p class="pa-1">{{title}}</p>
            </v-col>
            </v-row>
            </v-col>
            </v-row>

        <div class="py-12"></div>
      </section>
    </section>
    </v-container>
</template>
<script>
export default {
    name:'Skill',
    data:() => ({
        languages:[
            {'value': 90 ,'title':"Vue.js"},
            {'value': 80 ,'title':"Python"},
            {'value': 80 ,'title':"PHP"},
            {'value': 85 ,'title':"Blockchain"},
            {'value': 85 ,'title':"Chatbot"},
            {'value': 60 ,'title':"Tensorflow"},
            {'value': 50 ,'title':"R"},
            {'value': 40 ,'title':"Spark/SparkR"},
        ],
        articles:[
            {'title':'App Devlopment','text':"Helping you build a app that is platform independent with the help of PWA"},
            {'title':"Web Development",'text':"Helping you build complex Systems that is optimized with backend and a integrated Chatbot for solving your customer queries"},
            {'title':"Blockchain",'text':"Helping you build a blockchain solution based on ethereum to provide security to your transactions "},
            {'title':"ML & AI",'text':"Helping you build models that are browser specific designed to be deployed and integrated with your system"},
        ]
    })
}
</script>