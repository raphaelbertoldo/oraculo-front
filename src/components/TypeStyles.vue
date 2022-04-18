<template>
  <div>
    <h1>ESTA FUNCIONANDO O components</h1>
    <vuetify-audio
      :file="file"
      color="#6ddf3e"
      class="white--text"
      style="background-color: #0a141d"
      :ended="audioFinish"
      downloadable
    ></vuetify-audio>
  </div>
</template>
<script>
export default {
  components: {
    VuetifyAudio: () => import("vuetify-audio"),
  },
  name: "App",

  data: () => ({
    file: "http://www.hochmuth.com/mp3/Boccherini_Concerto_478-1. mp3",
  }),
};
</script>
