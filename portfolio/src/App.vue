<template >
  <v-app>
    <v-snackbar :width="60" max-height="20" v-model="snackset" :timeout="3000" top color="success">
            <span class="ml-5">The {{response}} Copied to Clipboard!</span>
            <v-icon flat class="ml-12" small color="white" @click="snackset=false">Close</v-icon>
    </v-snackbar>
   <v-app-bar
   color="transparent"
    v-scroll="onScroll"
    fixed
    flat
  >
    <v-slide-x-transition>
      <v-img
        v-if="showLogo"
        :src="require('@/assets/logo.png')"
        class="shrink"
        contain
        height="50"
        @click="$vuetify.goTo('#intro')"
      />
    </v-slide-x-transition>

    <v-spacer />
    <v-app-bar-nav-icon @click="tolink()"><v-icon>mdi-linkedin</v-icon></v-app-bar-nav-icon>
    <v-app-bar-nav-icon @click="copymail()"><v-icon>mdi-gmail</v-icon></v-app-bar-nav-icon>
    <v-app-bar-nav-icon @click="copynum()"><v-icon>mdi-phone</v-icon></v-app-bar-nav-icon>
  </v-app-bar>
    <Introduction/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <v-overlay v-model="$store.state.overlay">
        <v-card color="transparent" flat style="width:100%;" @click="$store.state.overlay=false">
        <v-row no no-gutters>
        <v-col cols="4" 
        class="d-flex"
        v-for="n in 6"
        :key="n">
        <v-img src="https://media.giphy.com/media/gFmkpNCar7TSoauRUs/source.gif" width="100%" contain="true">
        </v-img>
        </v-col>
        </v-row>
      </v-card>
    </v-overlay>
  </v-app>
</template>

<script>

import Introduction from "@/components/Introduction.vue"
import About  from "@/components/About.vue"
import Projects from "@/components/Projects.vue"
import Skills from "@/components/Skill.vue"
import Contact from "@/components/Contact.vue"
export default {
  name: 'App',

  components: {
    Introduction,
    About,
    Projects,
    Skills,
    Contact
  },
  created(){
  this.$vuetify.dark=true
},
  data: () => ({
    showLogo: false,
    isScrolling: false,
    snackset:false,
    overlay:false,
    response:'',

  }),
   methods: {
      onScroll () {
        const offset = window.pageYOffset
        this.isScrolling = offset > 50
        this.showLogo = offset > 200
      },
      tolink(){
        window.open("https://www.linkedin.com/in/aditya-dixit-73b810174/")
      },
      copymail(){
          navigator.clipboard.writeText("adidixit98@gmail.com")
          this.snackset=true
          this.response = 'Mail'
      },
      copynum(){
        navigator.clipboard.writeText("7738544876")
        this.snackset=true
        this.response = 'Number'
      },
   }
};

</script>

<style scoped>
</style>