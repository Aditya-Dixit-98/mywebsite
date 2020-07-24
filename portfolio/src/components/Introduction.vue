<template>
    <v-container fluid class="pa-0" id="intro">
        <v-row no-gutters>
          <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="@/assets/intro.jpg"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="amber--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="amber--text text-center"
                    cols="12"
                  >
                      <h1 :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']">Looking for
                           <br>
                          <span class="typed-text"  :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']">{{ typeValue }}</span>
                          <span class="white--text cursor" :class="{'typing': typeStatus}">|</span>
                      </h1>
                  </v-col>
                  <v-btn
                    class="align-self-end ml-2 font-weight-black"
                    outlined
                    rounded
                    x-large
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon class="text-caption">About</v-icon>
                  </v-btn>
                  <v-btn
                    class="align-self-end ml-2 font-weight-black"
                    outlined
                    rounded
                     x-large
                    @click="$vuetify.goTo('#skills')"
                  >
                    <v-icon class="text-caption">Skills</v-icon>
                  </v-btn>
                  <v-btn
                    class="align-self-end ml-2 font-weight-black"
                    outlined
                    rounded
                    x-large
                    @click="$vuetify.goTo('#projects')"
                  >
                    <v-icon class="text-caption">Projects</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'Introduction',
    data:() =>({
        typeValue: '',
        typeStatus: false,
        typeArray: ['Full-Stack Developer', 'AI Developer', 'Blockchain Developer'],
        typingSpeed: 200,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
    }),
        methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
}
</script>
<style lang="scss" scoped>
  h1 {
    span.typed-text {
      color: #fff;
    }
    span.cursor {
      margin-left: 3px;
      animation: cursorBlink 1s infinite;
    }
    span.cursor.typing {
      animation: none;
    }
  }
  @keyframes cursorBlink {
    49% { background-color: #fff; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
  }
</style>



