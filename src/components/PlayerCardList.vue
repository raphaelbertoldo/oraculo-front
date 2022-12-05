<template>
  <div class="d-flex">
    <v-card
      :style="cardStyle"
      type="list"
      :aspect-ratio="1 / 2"
      color="#350455"
      class="
        widthcardlist
        gradiente-purple
        white--text
        ml-4
        rounded-lg
        eletavion-4
        change-cursor
      "
      @click="$emit('cardCurrent')"
    >
      <div class="d-flex justify-center mt-6 ml-6 mr-6 rounded-lg">
        <v-img
          :aspect-ratio="1 / 1"
          class="d-flex justify-end rounded-lg elevation-8"
          :src="index.art"
        />
      </div>
      <v-card-title class="white--text mx-2">
        {{ index.title }}
      </v-card-title>
      <v-card-subtitle class="white--text d-flex justify-space-between mx-2"
        ><span>{{ index.subtitle }}</span>
      </v-card-subtitle>

      <v-card-actions class="mt-n6 pa-6 d-flex justify-space-between">
        <span
          @click="$emit('cardCurrent')"
          style="font-style: italic"
          class="change-cursor font-weight-black inn-shadow-2 rounded-lg px-2"
        >
          <v-icon color="white" class="mb-1"> mdi-play </v-icon>
          Ouvir
        </span>
        <span
          style="font-style: italic"
          class="change-cursor font-weight-black inn-shadow-2 rounded-lg px-2"
        >
          <v-icon color="white" @click="$emit('teste')" class="mb-1">
            mdi-shopping
          </v-icon>
          Comprar
        </span>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { api } from "../services/config";

export default {
  secondColor: "#350455",
  // props: ["title", "subtitle", "img", "beatkey", "bpm", "index"],
  props: ["index", "cardStyle"],

  data() {
    return {
      type: "list",
    };
  },
  computed: {
    api() {
      console.log(api);
      return `${api}`;
    },
  },
};
</script>

<style scoped>
.sec-color {
  background-color: rgb(109, 223, 62);
  /* #6ddf3e */
}
.vertical {
  transform: rotate(-90deg);
}
.inn-shadow-1 {
  box-shadow: -1px -1px 10px 1px rgb(99, 3, 255),
    1px 1px 15px 1px rgba(116, 0, 248, 0.984);
}
.inn-shadow-2:hover {
  box-shadow: -1px -1px 10px 1px rgb(0, 255, 85),
    1px 1px 15px 1px rgb(202, 247, 217);
}
.inn-card:hover {
  height: 370px;
  width: 290px;
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
.widthcardlist {
  width: 270px;
  z-index: 1;
  position: relative;
  box-shadow: 0 0 10px #000000 !important;
}
@media only screen and (max-device-width: 1550px) {
  .widthcardlist {
    width: 230px;
  }
}
@media only screen and (max-device-width: 1300px) {
  .widthcardlist {
    width: 300px;
  }
}
</style>