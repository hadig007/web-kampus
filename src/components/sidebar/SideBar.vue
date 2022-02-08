<template>
  <div class="sidebar">
    <div class="part part-1">
      <h4><router-link to="/home/html">HTML</router-link></h4>
      <ul>
        <li>Materi 1</li>
        <li>Materi 2</li>
        <li>Materi 3</li>
        <li>Materi 4</li>
      </ul>
    </div>
    <div class="part part-2">
      <h4><router-link to="/home/css">CSS</router-link></h4>
      <ul>
        <li>Materi 1</li>
        <li>Materi 2</li>
        <li>Materi 3</li>
        <li>Materi 4</li>
      </ul>
    </div>
    <div class="part part-3">
      <h4><router-link to="/home/javascript">JAVASCRIPT</router-link></h4>
      <ul>
        <li>Materi 1</li>
        <li>Materi 2</li>
        <li>Materi 3</li>
        <li>Materi 4</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  background-color: rgb(255, 255, 255);
  height: 95vh;
  z-index: -1;
  padding: 1rem;
  color: rgb(124, 126, 148);
  border-right: solid 0.5px rgb(240, 240, 240);
}
.part{
    margin: 20px auto;
}
ul {
  padding-left: 10px;
}
ul li {
  list-style: none;
}
h4{
    font-size: .9rem;
}
ul li{
    font-size: .9rem;
}
h4 a{
    font-weight: bold;
    text-decoration: none;
    color: rgb(92, 103, 122);
}
</style>

