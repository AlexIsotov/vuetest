<template>
  <div id="app">
    <nav class="navbar">
      <button @click="menu=!menu" class="menu">M</button>
      <div class="navHidden" v-if="menu">
        <router-link to="/" class="navlink">Home</router-link>
        <router-link to="/tasks" class="navlink">Dashboard</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data(){
    return {
      menu: false
    }
  },
  methods: {
  }
}
</script>

<style>
body {
  background: linear-gradient(180deg, khaki, lightyellow);
    height: 95vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  position: relative;
  display: inline-block;
  padding: 12px 14px;
  font-weight: 800;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid rgba(27,31,35,.2);
  border-radius: .25em;
  color: #5C5D7D;
  background-color: #fff;
  text-decoration: none;
}
.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;

}
.navHidden {
  background: #b7a5d1;
  padding: 12px 0;
}
.navlink {
  text-decoration: none;
  padding: 12px 14px;
}
.navlink:hover:not(.router-link-exact-active){
  background: #ae96d1;
}
.router-link-exact-active {
  background: #dae988;
}
</style>
