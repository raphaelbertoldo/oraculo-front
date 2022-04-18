<template>
  <v-app class="all">
    <v-app-bar app color="#0A141D" dark>
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
          <div class="px-6">BEATS DE TRAP</div>
          <v-divider vertical color="grey"></v-divider>
          <div class="px-6">BEATS DE FUNK</div>
          <v-divider vertical color="grey"></v-divider>

          <div class="px-6">TODOS OS BEATS</div>
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

    <v-main>
      <router-view />
    </v-main>
    <v-footer class="red">
      <div class="black d-flex align-center justify-center">
        <!-- <center class="">
          <h4>
            <span class="font-weight-light">Site desenvolvido por:</span>
            Raphael Ferreira Bertoldo &copy; Direitos Reservados
          </h4>
          <p>
            O uso indevido de qualquer intrumental pode ter penalidades
            judiciais conforme o art.74582
          </p>
        </center> -->
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
<style scoped>
.all {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
