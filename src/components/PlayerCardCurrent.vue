<template>
  <div class="d-flex mb-16">
    <h1 class="white--text"></h1>
    <audio id="beat_current_audio" :src="beatcurrent.beat || ''"></audio>

    <v-card
      type="list"
      :aspect-ratio="1 / 2"
      color="#350455"
      class="b-16 gradiente-purple inn-shadow-1 white--text ml-4 rounded-lg"
      width="400px"
    >
      <!-- <div class="red">
        <div class="d-flex align-end justify-end">
          <v-icon color="white" style="width: 50px" class="rotate-45 green"
            >mdi-plus</v-icon
          >
        </div>
      </div> -->
      <div class="d-flex justify-center mt-8 ml-8 mr-8 rounded-lg">
        <v-img
          :aspect-ratio="1 / 1"
          class="d-flex justify-end rounded-lg elevation-8"
          :src="beatcurrent.art"
        >
          <div class="">
            <div class="d-flex align-end justify-end">
              <center
                color="white"
                style="width: 240px"
                class="
                  white--text
                  px-6
                  mt-6
                  pl-16
                  mr-n14
                  gradiente-green
                  aling-start
                  justify-start
                  rotate-45
                  elevation-8
                "
              >
                Licença
              </center>
            </div>
          </div>
        </v-img>
      </div>
      <v-card-title class="white--text mx-2 d-flex justify-center align-center">
        <div class="">
          <center>{{ beatcurrent.title }}</center>
        </div>
      </v-card-title>
      <v-card-subtitle class="white--text mx-2"
        ><div class="d-flex justify-center align-center">
          <center>{{ beatcurrent.subtitle }}</center>
        </div>
      </v-card-subtitle>
      <v-card-text class=""
        ><div
          class="pa-2 d-flex justify-center align-center"
          style="height: auto"
        >
          <div class="px-4 mx-2 inn-shadow-1 sec-color rounded-xl">
            <center>
              <span style="font-style: italic" class="font-weight-black">{{
                beatcurrent.style
              }}</span>
            </center>
          </div>
          <div class="px-4 mx-2 inn-shadow-1 sec-color rounded-xl">
            <center>
              <span style="font-style: italic" class="font-weight-black"
                >{{ beatcurrent.bpm }} bpm</span
              >
            </center>
          </div>
          <div class="px-4 mx-2 inn-shadow-1 sec-color rounded-xl">
            <center>
              <span style="font-style: italic" class="font-weight-black">{{
                beatcurrent.key
              }}</span>
            </center>
          </div>
        </div>
        <div
          class="pa-2 d-flex justify-center align-center"
          style="height: auto"
        >
          <div class="px-4 mx-2 inn-shadow-1 white rounded-xl">
            <center>
              <span style="font-style: italic" class="font-weight-black"
                >Exclusive Only
              </span>
            </center>
          </div>
        </div></v-card-text
      >
      <div class="my-4 d-flex align-center justify-center">
        <div class="pa-1 change-cursor rounded-lg inn-shadow-2">
          <span style="font-style: italic" class="font-weight-black px-2">
            <v-icon color="white" @click="dialog = true" class="mb-1">
              mdi-shopping
            </v-icon>
            Comprar
          </span>
        </div>
      </div>
      <v-card-actions class="terc-color d-flex align-center justify-center">
        <div class="">
          <v-btn
            small
            fab
            depressed
            outlined
            class="inn-shadow-2 mx-2"
            @click="$emit('prevCard')"
            :disabled="index === 0"
          >
            <v-icon color="white"> mdi-skip-backward </v-icon>
          </v-btn>
          <v-btn
            fab
            depressed
            outlined
            class="inn-shadow-2 mx-2"
            @click="$emit('handlePause')"
            v-if="playcurrent === true"
          >
            <v-icon color="white"> mdi-pause </v-icon>
          </v-btn>
          <v-btn
            fab
            depressed
            outlined
            class="inn-shadow-2 mx-2"
            @click="$emit('handlePlay')"
            v-if="playcurrent === false"
          >
            <v-icon color="white" large> mdi-play </v-icon>
          </v-btn>
          <v-btn
            small
            fab
            depressed
            outlined
            class="inn-shadow-2 mx-2"
            @click="$emit('nextCard')"
            :disabled="index === beats.length - 1"
          >
            <v-icon color="white"> mdi-skip-forward </v-icon>
          </v-btn>
        </div>

        <!-- <div>
          <button onclick="document.getElementById('player').play()">
            Play
          </button>
          <button onclick="document.getElementById('player').pause()">
            Pause
          </button>
          <button onclick="document.getElementById('player').volume += 0.1">
            Vol +
          </button>
          <button onclick="document.getElementById('player').volume -= 0.1">
            Vol -
          </button>
        </div> -->
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  methods: {},
  props: ["beats", "index", "playcurrent"],
  data() {
    return {};
  },
  computed: {
    beatcurrent() {
      console.log("here", this.beats[this.index]);
      console.log(
        "🚀 ~ file: PlayerCardCurrent.vue:187 ~ beatcurrent ~ beat",
        this.index
      );
      return this.beats[this.index];
    },
  },
};
</script>
<style scoped>
.sec-color {
  background-color: rgb(109, 223, 62);
  /* #6ddf3e */
}
.terc-color {
  background-color: rgb(73, 40, 131);
  /* #6ddf3e */
}
.inn-shadow-1 {
  box-shadow: -1px -1px 10px 1px rgb(99, 3, 255),
    1px 1px 15px 1px rgba(116, 0, 248, 0.984);
}
.inn-shadow-2:hover {
  box-shadow: -1px -1px 10px 1px rgb(0, 255, 85),
    1px 1px 15px 1px rgb(202, 247, 217);
}
.vertical {
  transform: rotate(-90deg);
}
.rotate-45 {
  transform: rotate(45deg);
}
.gradiente-green {
  background-color: rgba(250, 0, 196, 0.963);
  background-image: linear-gradient(to right, rgb(62, 223, 204));
}
.gradiente-purple {
  background-image: linear-gradient(
    to top,
    rgb(99, 3, 255),
    transparent,
    rgb(139, 71, 248)
  );
}
.change-cursor {
  cursor: pointer;
}
</style>
