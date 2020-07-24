<template>
    <v-container fluid style="background:#283655" class="pa-0">
     <section
        id="projects"
      >
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">My Projects</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ icon, title, text }, i) in features"
              :key="i"
              cols="12"
              md="4"
            >
              <v-card
                class="py-12 px-4"
                color="grey darken-4"
                flat
              >
                <v-theme-provider dark>
                  <div>
                    <v-avatar
                      color="primary"
                      size="88"
                    >
                      <v-icon
                        large
                        v-text="icon"
                      ></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight-black text-uppercase"
                  v-text="title"
                ></v-card-title>

                <v-card-text
                  class="subtitle-1"
                  v-text="text"
                >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>
    </v-container>
</template>
<script>
export default {
    name:'Projects',
    
    data:() => ({
        features: [
            {
            icon: 'mdi-android',
            title: 'L&T Feedback app',
            text: 'A feedback application designed to provide feedback according to the sessions conducted with an integrated Chatbot system for interactive personal feedback experience',
          },
          {
            icon: 'mdi-account-group-outline',
            title: 'We Care',
            text: 'A web portal designed to donate money to martyred soilders family with a integrated payment gateway.Built using Laravel with Material UI components with SQL Database',
          },
          {
            icon: 'mdi-ethereum',
            title: 'BPRES',
            text: 'Stands for Blockchain-Powered-Real-Estate-System A blockchain based web system designed to buy,sell,rent property view documents and see previous owners to avoid forgery and illegal sale of property. Built-on Ethereum Blockchain with truffle framework and Solidity and IPFS for storage of documents ',
          },
          {
            icon: 'mdi-store-outline',
            title: 'Sellco',
            text: 'A simple and reactive E-commerce Solution for selling products designed as PWA using Vue.js with NO-SQL database of Firebase-Firestore',
          },
          {
            icon: 'mdi-numeric',
            title: 'Number Recognition',
            text: 'A CNN model that classfies handwritten digits designed using Tensorflow.js built on Node.js ',
          },
          
        ]
    })
}
</script>