<template class="pri-color">
  <div class="pri-color mb-16">
    <h2 class="white--text pt-6 pl-6">Todos os Beats</h2>
    <v-row class="mt-6 pri-color">
      <v-col cols="12" lg="8" class="pr-8">
        <div class="d-flex">
          <v-row class="">
            <v-col
              cols="12"
              sm="6"
              md="4"
              xl="4"
              class="d-flex"
              v-for="(beat, index) in beats"
              :key="index"
            >
              <!-- CARD DA LISTA -->
              <PlayerCardList
                :card-style="
                  beatcurrent === index
                    ? { boxShadow: '0 0 20px lime !important' }
                    : {}
                "
                :index="beat"
                @cardCurrent="cardCurrent(index)"
              />

              <!-- MARCADOR LATERAL -->
              <div class="flex-column" style="position: relative">
                <!-- PRIMEIRO MARCADOR - ESTILO MUSICAL -->
                <div
                  class="inn-shadow-1 sec-color rounded-r-xl pa-2 mt-4"
                  style="height: auto"
                >
                  <div class="pr-2">
                    <center>
                      <span
                        style="font-style: italic"
                        class="font-weight-bold"
                        >{{ beat.style }}</span
                      >
                    </center>
                  </div>
                </div>
                <!-- SEGUNDO MARCADOR - BPM  -->
                <div
                  class="sec-color rounded-r-xl pa-1 mt-4 pa-2"
                  style="height: auto"
                >
                  <div class="">
                    <center>
                      <span class="font-weight-bold">{{ beat.bpm }}</span> bpm
                    </center>
                  </div>
                </div>
                <!-- TERCEIRO MARCADOR  -->
                <div
                  class="sec-color rounded-r-xl pa-1 mt-4 pa-2"
                  style="height: auto"
                >
                  <div class="">
                    <span class="font-weight-bold" style="font-style: italic">
                      <v-icon class="mb-1 mr-n2"
                        >mdi-music-accidental-sharp</v-icon
                      >
                      {{ beat.beatkey }}
                    </span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <!-- SEGUNDA COLUNA - PLAYER -->
      <v-col cols="12" lg="4" class="">
        <h1 class="white--text"></h1>
        <div>
          <div class="mr-10">
            <div class="d-flex justify-center align-center white--text">
              <PlayerCardCurrent
                :index="beatcurrent"
                @handlePlay="handlePlay"
                @handlePause="handlePause"
                @nextCard="nextCard"
                @prevCard="prevCard"
                :beats="beats"
                :playcurrent="playcurrent"
              />
              <audio
                id="beat_current_audio"
                src="../assets/beats/beat-01-funk.wav"
              ></audio>
            </div>
          </div>
          <div class="mx-10 mr-16">
            <div
              class="
                pa-4
                rounded-lg
                flex
                font-change
                white--text
                mx-10
                mr-10
                sec-solor-op3
              "
            >
              <h2 class="font-weight-light d-flex justify-center">
                Licença Exclusiva
              </h2>
              <div class="mt-4">
                <p>
                  -Licença 100% Exclusiva, ou seja, o beat não será
                  comercializado para outros artistas.
                </p>
                <p>
                  -Contrato de exclusividade vitalício, sem prazo de término.
                </p>
                <p>-Arquivo WAV e faixas separadas.</p>
                <p>-Versão Mixado e Masterizado.</p>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import beats from "../services/beats";
import PlayerCardCurrent from "../components/PlayerCardCurrent.vue";
import PlayerCardList from "../components/PlayerCardList.vue";
export default {
  mounted() {
    beats.list().then((res) => {
      this.beats = res.data;
      console.log(this.beats);
    });
  },
  name: "allbeats",

  data() {
    return {
      // beats: [],

      i: "",
      playcurrent: false,
      beatcurrent: 0,
      beats: [
        {
          title: "Beat de Trap Luxo",
          subtitle: "Beat de Trap estilo Chefin, Matuê, Teto...",
          img: require("../assets/img1.jpg"),
          file: "",
          bpm: "136",
          beatkey: "Am",
          style: "TRAP ",
          open: true,
          license: "Exclusiva",
        },
        {
          title: "Beat de Trap SP",
          subtitle: "Beat de Trap estilo Chefin, Matuê, Teto...",
          img: require("../assets/img2.jpg"),
          file: "",
          bpm: "136",
          beatkey: "Am",
          style: "TRAP",
          open: true,
          license: "Exclusiva",
        },
        {
          title: "Beat de Trap Oriental",
          subtitle: "Beat de Trap estilo Chefin, Matuê, Teto...",
          img: require("../assets/img3.jpg"),
          file: "",
          bpm: "136",
          beatkey: "Am",
          style: "TRAP",
          license: "Exclusiva",
        },
        {
          title: "Beat de Trap Cuba",
          subtitle: "Beat de Trap estilo Chefin, Matuê, Teto...",
          img: require("../assets/img4.jpg"),
          file: "",
          bpm: "136",
          beatkey: "Am",
          style: "TRAP",
          license: "Lease",
        },
        {
          title: "Beat de Trap Luxo",
          subtitle: "Beat de Trap estilo Chefin, Matuê, Teto...",
          img: require("../assets/img1.jpg"),
          file: "",
          bpm: "136",
          beatkey: "Am",
          style: "TRAP ",
          open: true,
          license: "Exclusiva",
        },
        {
          title: "Beat de Trap SP",
          subtitle: "Beat de Trap estilo Chefin, Matuê, Teto...",
          img: require("../assets/img2.jpg"),
          file: "",
          bpm: "136",
          beatkey: "Am",
          style: "TRAP",
          open: true,
          license: "Exclusiva",
        },
        {
          title: "Beat de Trap Oriental",
          subtitle: "Beat de Trap estilo Chefin, Matuê, Teto...",
          img: require("../assets/img3.jpg"),
          file: "",
          bpm: "136",
          beatkey: "Am",
          style: "TRAP",
          license: "Exclusiva",
        },
        {
          title: "Beat de Trap Cuba",
          subtitle: "Beat de Trap estilo Chefin, Matuê, Teto...",
          img: require("../assets/img4.jpg"),
          file: "",
          bpm: "136",
          beatkey: "Am",
          style: "TRAP",
          license: "Lease",
        },
        {
          title: "Beat de Trap Luxo",
          subtitle: "Beat de Trap estilo Chefin, Matuê, Teto...",
          img: require("../assets/img1.jpg"),
          file: "",
          bpm: "136",
          beatkey: "Am",
          style: "TRAP ",
          open: true,
          license: "Exclusiva",
        },
        {
          title: "Beat de Trap SP",
          subtitle: "Beat de Trap estilo Chefin, Matuê, Teto...",
          img: require("../assets/img2.jpg"),
          file: "",
          bpm: "136",
          beatkey: "Am",
          style: "TRAP",
          open: true,
          license: "Exclusiva",
        },
        {
          title: "Beat de Trap Oriental",
          subtitle: "Beat de Trap estilo Chefin, Matuê, Teto...",
          img: require("../assets/img3.jpg"),
          file: "",
          bpm: "136",
          beatkey: "Am",
          style: "TRAP",
          license: "Exclusiva",
        },
        {
          title: "Beat de Trap Cuba",
          subtitle: "Beat de Trap estilo Chefin, Matuê, Teto...",
          img: require("../assets/img4.jpg"),
          file: "",
          bpm: "136",
          beatkey: "Am",
          style: "TRAP",
          license: "Lease",
        },
      ],
    };
  },
  methods: {
    handlePlay() {
      window.beat_current_audio.play();
      this.playcurrent = true;
    },
    handlePause() {
      window.beat_current_audio.pause();
      this.playcurrent = false;
    },
    nextCard() {
      this.i++;

      this.beatcurrent++;
    },
    prevCard() {
      this.i--;
      this.beatcurrent--;
    },
    cardCurrent(index) {
      this.i = index;
      this.beatcurrent = index;
      // alert(index);
    },
  },

  components: { PlayerCardList, PlayerCardCurrent },
};
</script>
<style scoped>
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
