<template>
  <div>
    <v-icon size="100" color="white" class="round">mdi-bookmark-music</v-icon>
  </div>
</template>
<style scoped>
@keyframes rounded {
  from {
  }
  to {
    transform: rotate(359deg);
  }
}
.round {
  animation: rounded;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}
</style>