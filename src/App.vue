<template class="">
  <v-app class="all" color="black">
    <v-app-bar
      app
      color="black"
      dark
      class="hidden-sm-and-down elevation-5 inn-shadow-1"
    >
      <div class="d-flex align-center">
        <v-img
          alt="logo"
          class="shrink mr-2"
          contain
          src="./assets/logo-only-green.png"
          transition="scale-transition"
          width="60"
        />

        <v-img
          alt="Oráculo Beats"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/logo-name-green.png"
          width="100"
        />
        <div class="d-flex">
          <div class="px-6">
            <router-link to="/" class="white--text noline"
              ><h3>INICIO</h3></router-link
            >
          </div>
          <v-divider vertical color="grey"></v-divider>
          <div class="px-6">
            <router-link to="/allbeats" class="white--text noline"
              ><h3>BEATS</h3></router-link
            >
          </div>
          <v-divider vertical color="grey"></v-divider>
          <div class="px-6"><h3>PACKS</h3></div>
          <v-divider vertical color="grey"></v-divider>
          <v-divider vertical color="grey"></v-divider>
          <div class="px-6"><h3>ABOUT</h3></div>
          <v-divider vertical color="grey"></v-divider>
          <div class="px-6"><h3>SERVIÇOS</h3></div>
        </div>
      </div>

      <v-spacer></v-spacer>

      <div class="">
        <v-icon class="px-2">mdi-instagram</v-icon>
        <v-icon class="px-2">mdi-facebook</v-icon>
        <v-icon class="px-2">mdi-whatsapp</v-icon>
        <a
          href="http://youtube.com/c/OráculoBeats?sub_confirmation=1"
          target="_blank"
          style="text-decoration: none"
        >
          <v-icon class="px-2">mdi-youtube</v-icon>
        </a>
      </div>
    </v-app-bar>

    <v-main class="pri-color-2 all">
      <router-view />
    </v-main>
    
  </v-app>
</template>

<script>

export default {
 

  data() {
    return {
      beats: [],
      playerFooter: true,

      secColor: "#6ddf3e",
    };
  },
  components: {},
  name: "App",
};
</script>
<style>
@font-face {
  font-family: Oxanium;
  src: url(assets/Oxanium-Regular.ttf);
}
html {
  background: #000;
}

.all {
  font-family: Oxanium;
}
.pri-color {
  background-color: rgb(0, 0, 29);
  /* #0A141D */
}
.pri-color-2 {
  background-color: rgb(0, 0, 20);
  /* #0A141D */
}
.sec-color {
  background-color: rgb(109, 223, 62);
  /* #6ddf3e */
}
.neongreen {
  box-shadow: 0 0 1em rgb (109, 223, 62);
}
.dark-back {
  background-color: rgb(10, 20, 29);
}
.noline {
  text-decoration: none;
}
.inn-shadow-1 {
  box-shadow: -1px -1px 10px 1px rgb(99, 3, 255),
    1px 1px 15px 1px rgb(0, 255, 85);
}
@keyframes shadow-anim {
  from {
    box-shadow: -1px -1px 10px 1px rgb(99, 3, 255),
      1px 1px 15px 1px rgb(0, 255, 85);
  }
  to {
    box-shadow: -1px -1px 10px 1px rgb(255, 3, 32),
      1px 1px 15px 1px rgb(255, 174, 0);
  }
}
.inn-shadow-animation {
  box-shadow: -1px -1px 10px 1px rgb(99, 3, 255),
    1px 1px 15px 1px rgb(0, 255, 85);
  animation-name: shadow-anim;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
</style>
