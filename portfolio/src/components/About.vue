<template>
<v-container fluid class="pa-0">
      <section id="about-me">
        <div class="py-12"></div>
        
        
        <v-container class="text-center">
          
          <h2 class="display-2 font-weight-bold pt-10 mb-3 ">ABOUT ME</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>
          
          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
          >
           Hi! I am Aditya Dixit a B.E in Information Technologly from Dwarkadas.J.Sanghvi College of Engineering.I am a Full-Stack/AI/BlockChain Developer.
              I have expereince in developing clean and scalable PWA as well as web aplications using Vue.js 
              as Front-End and No-SQL database such as firebase as backend.
              I have also expereince in working with ethereum blockchain using truffle framework and Solidity.
              I have also designed few basic machine learning and neural network models such as 
              DNN and CNN models using Tensorflow & Keras.
          </v-responsive>

          <v-avatar
            class="elevation-12 mb-12"
            size="200"
          >
            <v-img src="@/assets/developer.gif"></v-img>
          </v-avatar>

          <div></div>
      </v-container>
        

        <div class="py-12">

        </div>
      </section>
</v-container>
</template>

<script>
export default {
    name: 'About'
    }
</script>
<style>
#about-me{
background: #1E1F26;
}
</style>