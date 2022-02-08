<template>
  <div class="home">
    <div :style="thePath==true? 'display : flex;' : 'display : none;'" class="home-content">
      <h1>HOME APP</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  computed: {
    thePath() {
      let status = false;
      const route = useRoute();
      if (
        route.fullPath === "/home"
      ) {
        status = true;
        // console.log(status);
        return status;
      } else {
        status = false;
        // console.log(status);
        return status;
      }
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  background-color: rgb(255, 255, 255);
}
</style>