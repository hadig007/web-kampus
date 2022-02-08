<template>
    <header class="header">
      <span class="menu" v-if="show===false" @click="showing">
        <i class="fas fa-bars"></i>
      </span>
      <span class="close" v-else @click="showing">
        <i class="fas fa-times"></i>
      </span>
      <h1>Learn</h1>
      <nav>
        <ul  :style="show===true? 'opacity:1;transform: translateX(0);' : ''">
          <li @click="showing"><router-link to="/home">Beranda</router-link></li>
          <li @click="showing"><router-link to="/about">Tentang</router-link></li>
          <li @click="showing"><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showing() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.header {
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px;
  box-shadow: 0 0px 4px 0.3px rgba(102, 102, 102, 0.2);
  height: 7vh;
  z-index: 10;
  border-bottom: solid 0.5px rgb(240, 240, 240);
  overflow: hidden;
}
h1 {
    color: rgb(161, 161, 161);
  font-weight: bold;
  margin: 0;
}
nav ul {
    display: flex;
  flex-direction: row;
}
ul li {
    list-style: none;
  margin: 0 30px;
}
li a {
    font-weight: bold;
  text-decoration: none;
  color: rgb(140, 149, 163);
  font-size: 1rem;
}
.menu {
    display: none;
}
.close {
    display: none;
}

/* handphone  */
@media screen and (max-width: 576px) {
  .header {
      display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 30px;
    overflow-x: hidden;
    box-shadow: 0 2px 4px 0.3px rgba(102, 102, 102, 0.5);
  }
  .menu {
      display: initial;
    color: rgb(255, 115, 0);
    font-size: 1.5rem;
    margin: 0 1rem;
    width: 15px;
    animation: menu ease-in 0.2s;
    cursor: pointer;
  }
  .close {
      display: initial;
    color: rgb(255, 115, 0);
    font-size: 1.5rem;
    margin: 0 1rem;
    width: 15px;
    animation: menu 0.2s ease-out;
    cursor: pointer;
  }
  nav ul {
      display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 7.3vh;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0;
    background-color: aqua;
    height: 95vh;
    transform: translateX(-100%);
    opacity: 0;
    transition: all .2s ease-in;
  }
  h1 {
    color: rgb(255, 115, 0);
    font-size: 2rem;
  }
  ul li {
    margin: 1rem;
  }
  li a {
    font-size: 2rem;
  }
}
@keyframes menu {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
</style>