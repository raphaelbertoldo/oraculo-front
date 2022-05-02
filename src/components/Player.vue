<template>
  <div class="w-full green">
    <vuetify-audio
      :file="file"
      color="black"
      flat
      class="white--text w-full elevation-0"
      style="background-color: #6ddf3e"
    />
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
