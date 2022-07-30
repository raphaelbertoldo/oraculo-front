<template>
  <div class="image-back size-all no-scroll">
    <div class="blackopc size-all d-flex align-center">
      <v-row class="size-all">
        <v-col
          cols="12"
          md="8"
          class="
            shad-font
            mt-16
            white--text
            d-flex-column
            flex
            max-font
            ms-sm-16 ms-xs-10
            align-space-between
            h-full
          "
        >
          <div class="d-flex align-center" style="min-width: 800px">
            <v-icon color="white" size="120"> mdi-finance </v-icon>
            <h1>
              Eleve a sua música <br />
              para o próximo nível
            </h1>
          </div>
          <div
            class="d-flex align-center flex-md-row-reverse mt-10"
            style="min-width: 600px"
          >
            <v-icon color="white" size="120"> mdi-headphones</v-icon>
            <h1>
              Obtenha nossos beats <br />
              de máxima qualidade
            </h1>
          </div>
          <div class="d-flex align-center mt-10" style="min-width: 600px">
            <v-icon color="white" size="120"> mdi-currency-usd</v-icon>
            <h1>
              Profissionalize <br />
              sua carreira músical
            </h1>
          </div>
          <div class="flex mt-16 d-flex align-center justify-center">
            <v-btn
              to="/allbeats"
              color="#6ddf3e"
              class="
                select
                inn-shadow-animation
                mt-md-10
                pa-8
                align-center
                justify-center
                d-flex
              "
              ><h1>OUVIR CATÁLOGO</h1></v-btn
            >
          </div>
        </v-col>
        <!-- <v-col cols="3" class="red">
          <div class="pa-4 anim-border">
            <div class="select test text-center">APENAS UM TESTE</div>
          </div>
        </v-col> -->
      </v-row>
    </div>
  </div>
</template>


<script>
import beats from "../services/beats";

export default {
  mounted() {
    beats.list().then((res) => {
      console.log(res.data);
      this.beats = res.data;
    });
  },
  name: "Home",
  components: {},
  computed: {},
  data() {
    return {
      beats: [],

      array: [],
    };
  },
};
</script>
<style scoped>
.anim-border {
  background-color: rgb(0, 132, 255);
}
.no-scroll {
  overflow: hidden;
}
.shad-font {
  text-shadow: 0 0 20px #ffffff49;
}
.max-font {
  font-size: 12pt;
}
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
.image-back {
  background-image: url(../assets/image-back.jpeg);
  background-position: 20% 40%;
  background-attachment: fixed;
  /* opacity: 0.5; */
}
.backopc::before {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url("../assets/image-back.jpeg");
  opacity: 0.4;
  content: "";
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
}
.blackopc {
  background-color: rgba(9, 9, 9, 0.8);
}
.noopc {
  opacity: 1;
}
.inn-shadow-1 {
  box-shadow: -1px -1px 10px 1px rgb(99, 3, 255),
    1px 1px 15px 1px rgb(0, 255, 85);
}
@media (min-width: 600px) {
  .max-font {
    font-size: 16pt;
  }
}
@keyframes shadow-anim {
  0% {
    box-shadow: -1px -1px 10px 1px rgb(99, 3, 255),
      1px 1px 15px 1px rgb(0, 255, 85);
  }
  25% {
    box-shadow: 3px 3px 50px 3px rgb(196, 1, 255),
      3px 3px 20px 1px rgb(3, 247, 255);
  }

  100% {
    box-shadow: -1px -1px 10px 1px rgb(99, 3, 255),
      1px 1px 15px 1px rgb(0, 255, 85);
  }
}
.inn-shadow-animation {
  box-shadow: -1px -1px 10px 1px rgb(99, 3, 255),
    1px 1px 15px 1px rgb(0, 255, 85);
  animation-name: shadow-anim;
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
}
.select:hover {
  background-color: rgb(99, 3, 255);
  color: rgb(23, 87, 1);
  box-shadow: 3px 3px 90px 3px rgb(196, 1, 255),
    3px 3px 50px 1px rgb(3, 247, 255);
  animation: none !important;
}
</style>
