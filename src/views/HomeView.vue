<template>
  <div class="">
    <div class="element">
      <div class="white--text">fdgdsdfsdfgdgf</div>
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
  computed: {
    // agroupname: function (index) {
    //   return index.groupBy(({ idade }) => idade);
    // },
  },
  data() {
    return {
      beats: [],

      array: [
        //   { name: "Raphael", idade: "20" },
        //   { name: "Raphael", idade: "23" },
        //   { name: "Amanda", idade: "20" },
        //   { name: "Amanda", idade: "23" },
        //   { name: "Patrick", idade: "20" },
        //   { name: "Patrick", idade: "23" },
      ],
    };
  },
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
.image-back {
  background-image: url(../assets/image-back.jpeg);
  background-position: 20% 40%;
  background-attachment: fixed;
  opacity: 0.5;
}
.element::before {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url("../assets/image-back.jpeg");
  opacity: 0.4;
  content: "";
  z-index: -1;
}
.no-opc {
  opacity: none;
}
</style>
