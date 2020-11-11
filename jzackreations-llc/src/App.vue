<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getAllImages');
  }
}
</script>

<style>
#app {
  font-family: URW Chancery L, cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: black;
}

body {
  background-color: "black"
}

#nav {
  padding: 30px;
  color: #686868;
  font-size: 20px;
}

#nav a {
  font-weight: bold;
  font-size: 20px;
  color: #686868;
}

#nav a.router-link-exact-active {
  color: #cc1e1e;
  font-size: 24px;
}
</style>
