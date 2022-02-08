<template>
    <div>
        <header>
            <h1>Learn</h1>
            <nav>
                <ul>
                    <li><router-link to="/home">Beranda</router-link></li>
                    <li><router-link to="/about">Tentang</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
header{
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    box-shadow: 0 0px 4px .3px rgba(102, 102, 102, 0.2);
    height: 5vh;
    z-index: 10;
    border-bottom: solid 0.5px rgb(240, 240, 240);
}
h1{
    color: rgb(161, 161, 161);
    font-weight: bold;
    margin: 0;
}
nav ul{
    display: flex;
    flex-direction: row;
}
ul li{
    list-style: none;
    margin: 0 30px;
}
li a{
    font-weight: bold;
    text-decoration: none;
    color: rgb(140, 149, 163);
}

</style>