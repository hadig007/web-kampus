<template>
  <div class="home">
    <header-app></header-app>
    <div :class="[thePath===true ? 'body' : 'body2']">
      <div class="sidebar" :style="thePath===true? '' : 'display : none;'">
        <side-bar></side-bar>
      </div>
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="page">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderApp from "./components/header/HeaderApp.vue";
import SideBar from "./components/sidebar/SideBar.vue";
import { useRoute } from 'vue-router';

export default {
  name: "App",
  created(){
      const route = useRoute();
      if(route.fullPath==='/'){
        this.$router.push('/home')
      }
  },
  computed: {
    thePath() {
      let status = false
      const route = useRoute();
     if(route.fullPath==='/home' || route.fullPath==='/home/html' || route.fullPath==='/home/css' || route.fullPath==='/home/javascript'){
       status = true
      //  console.log(status)
       return status
     }else{
       status = false
      //  console.log(status)
       return status
     }
    },
  },
  components: {
    HeaderApp,
    SideBar,
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
/* html, body {
  overflow-x:hidden 
} */
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  background-color: rgba(239, 253, 253, 0.589);
  overflow-x: hidden;
  box-sizing: border-box;
}

.content {
  background-color: rgba(255, 255, 255, 0.644);
  margin: 50px auto;
  width:60vw;
  height: 95vh;
  box-shadow: 0 0px 4px 0.3px rgba(102, 102, 102, 0.1);
  grid-area: 'content';
}
.sidebar{
  grid-area: 'sidebar';
  max-width: 20vw;
}
.body {
  display: grid;
  grid-template-areas: 'sidebar content';
}
.body2 {
  display: grid;
  grid-template-areas: 'content';
  background-color: rgb(0, 255, 255);

}
.page-enter-from {
  opacity: 0;
}
.page-enter-to {
  opacity: 1;
}
.page-enter-active {
  transition: all linear 0.4s;
}
.page-leave-from {
  opacity: 1;
}
.page-leave-to {
  opacity: 0;
}
.page-leave-active {
  transition: all linear 0.4s;
}
h1,
h2,
h3,
h4,
h5,
h6,
ul {
  margin: 0;
}



/* phone */

@media screen and (max-width: 576px) {
  .body {
  display: grid;
  grid-template-areas: 'content';

}
  .sidebar{
    display: none;
  }

.content{
  margin: 20px auto;
  width: 90vw;
}
}

</style>
