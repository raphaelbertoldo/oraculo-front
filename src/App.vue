<template class="">
  <v-app class="all">
    <v-app-bar app color="#0A141D" dark class="">
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
        <div class="d-flex pa-5">
          <div class="px-6">
            <router-link to="/" class="white--text noline">INICIO</router-link>
          </div>
          <v-divider vertical color="grey"></v-divider>
          <div class="px-6">BEATS DE TRAP</div>
          <v-divider vertical color="grey"></v-divider>
          <div class="px-6">BEATS DE FUNK</div>
          <v-divider vertical color="grey"></v-divider>

          <div class="px-6">
            <router-link to="/allbeats" class="white--text noline"
              >TODOS OS BEATS</router-link
            >
          </div>
          <v-divider vertical color="grey"></v-divider>

          <div class="px-6">SERVIÇO PERSONALIZADO</div>
        </div>
      </div>

      <v-spacer></v-spacer>

      <div class="">
        <v-icon class="px-2">mdi-instagram</v-icon>
        <v-icon class="px-2">mdi-facebook</v-icon>
        <v-icon class="px-2">mdi-whatsapp</v-icon>
      </div>
    </v-app-bar>

    <v-main class="pri-color-2">
      <router-view />
    </v-main>
    <v-footer
      fixed
      color="#6ddf3e"
      id="player"
      class="black--text"
      style="font-style: italic"
    >
      <div class="w-full" style="width: 100%"></div>
      <div
        class="
          flex
          d-flex
          flex-row-reverse
          justify-space-between
          align-space-between align-center
        "
      >
        <h4>
          <span class="font-weight-light">Site desenvolvido por:</span>
          Raphael Ferreira Bertoldo &copy; 2022 Todos os Direitos Reservados
        </h4>
        <h3 class="font-weight-medium">
          O uso indevido de qualquer intrumental pode ter penalidades judiciais
          conforme o art.74582
        </h3>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
// import beats from "./services/beats";

export default {
  // mounted() {
  //   beats.list().then((res) => {
  //     console.log(res.data);
  //     this.beats = res.data;
  //   });
  // },

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
<style scoped>
.all {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
</style>
