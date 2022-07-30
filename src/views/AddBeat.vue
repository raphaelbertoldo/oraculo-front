<template>
  <div>
    <!-- nome
        descrição
        estilo
        bpm
        tom -->
    <v-card class="black pa-10 h-full">
      <v-row>
        <v-col cols="6">
          <div class="">
            <h3 class="white--text mt-3">Nome do Beat:</h3>
            <v-text-field
              v-model="beat.title"
              dark
              color="white"
              flat
              dense
              solo
              background-color="#0A141D"
              class="mt-1 text-field-style"
              placeholder="Insira aqui o nome do Beat"
            ></v-text-field>
          </div>
          <div class="">
            <h3 class="white--text mt-3">Descrição do Beat:</h3>
            <v-textarea
              v-model="beat.description"
              dark
              color="white"
              flat
              dense
              solo
              background-color="#0A141D"
              class="mt-1 text-field-style"
              placeholder="Insira aqui a descrição"
            ></v-textarea>
          </div>
          <div class="d-flex">
            <div style="width: 50%">
              <h3 class="white--text mt-3">Estilo:</h3>
              <v-select
                item-color="green"
                :items="beat.style"
                v-model="stylefield"
                dark
                color="white"
                flat
                dense
                solo
                background-color="#0A141D"
                class="mt-1 text-field-style"
                placeholder="Escolha o estilo"
              ></v-select>
            </div>
            <div style="width: 50%" class="ml-4">
              <h3 class="white--text mt-3">Bpm: {{ bpmfield }}</h3>
              <v-slider
                class="mx-4 mt-2"
                light
                v-model="bpmfield"
                :label="beat.bpm"
                :color="sec_color"
                track-color="grey darken-3"
                min="80"
                max="160"
              ></v-slider>
            </div>
          </div>
          <div class="d-flex flex">
            <div class="" style="width: 50%">
              <h3 class="white--text mt-3">Chave:</h3>
              <v-select
                v-model="keyfield"
                dark
                color="white"
                flat
                dense
                solo
                background-color="#0A141D"
                class="mt-1 text-field-style"
                placeholder="Insira aqui o "
              ></v-select>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import beats from "../services/beats";

export default {
  mounted() {
    beats.list().then((res) => {
      this.beats = res.data;
      console.log(this.beats);
    });
  },
  data() {
    return {
      namefield: "",
      descriptionfield: "",
      stylefield: "",
      bpmfield: "124",
      keyfield: "",
      licensefield: "",

      sec_color: "#6ddf3e",
      beat: {
        name: "",
        description: "",
        style: [
          "Trap",
          "Funk",
          "Trap Funk",
          "Pop",
          "Boombap",
          "R&B",
          "Estilo Experimental",
        ],
        bpm: "",
        key: [
          "A",
          "Am",
          "B",
          "Bm",
          "C",
          "Cm",
          "D",
          "Dm",
          "E",
          "Em",
          "F",
          "Fm",
          "G",
          "Gm",
        ],
        license: ["exclusive", "lease"],
      },
    };
  },
};
</script>
<style scoped>
.text-field-style >>> .v-text-field__slot input {
  color: rgb(255, 255, 255);
}
.op-3 {
  opacity: 0.3;
}
.font-change {
  font-family: "Courier New", Courier, monospace;
}
.all {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.size-all {
  width: 100%;
  height: 100%;
}
.pri-color {
  background-color: rgb(0, 0, 20);
  /* #0A141D */
}
.sec-color {
  background-color: rgb(109, 223, 62);
  /* #6ddf3e */
}
.sec-solor-op3 {
  background-color: rgba(250, 0, 196, 0.963);
}

.neongreen {
  box-shadow: 0 0 1em rgb (109, 223, 62);
}
.dark-back {
  background-color: rgb(0, 0, 20);
}
.inn-shadow-1 {
  box-shadow: -1px -1px 10px 1px rgb(99, 3, 255),
    1px 1px 15px 1px rgb(0, 255, 85);
}
.vertical {
  transform: rotate(90deg);
}
.fixed {
  position: fixed;
}
@media only screen and (max-device-width: 1264px) {
  .fixed {
    position: none;
  }
}
</style>

