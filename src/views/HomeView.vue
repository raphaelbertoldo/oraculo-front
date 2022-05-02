<template>
  <div class="size-all d-flex px-16">
    <div class="size-all d-flex justify-space-between pa-10">
      <audio src="./assets/video.mp4"></audio>
      <video controls src="./assets/video.mp4"></video>
      <v-card elevation-0 class="ma-12 white--text"
        ><div class="dark-back borderx size-all">
          <v-card-title>01010101</v-card-title>
          <v-card-subtitle>010101010101</v-card-subtitle>
        </div>
      </v-card>
      <v-card elevation-0 class="ma-12 white--text"
        ><div class="dark-back borderx size-all">
          <v-card-title>01010101</v-card-title>
          <v-card-subtitle>010101010101</v-card-subtitle>
        </div>
      </v-card>
      <v-card elevation-0 class="ma-12 white--text"
        ><div class="neongreen dark-back borderx size-all">
          <v-card-title>01010101</v-card-title>
          <v-card-subtitle>010101010101</v-card-subtitle>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},
};
</script>
<style scoped>
.size-all {
  width: 100%;
  height: 100%;
}
.borderx {
  border: solid #6ddf3e 3px;
}
.dark-back {
  background-color: rgb(10, 20, 29);
}
.neongreen {
  box-shadow: 0 0 1em rgb (109, 223, 62);
}
</style>
