<template>
  <div id="app">
    <nav class="navbar">
      <div @click="menu=!menu" class="menu" :class="{menuAnim:menu}">
        <div class="menuIcon" :class="{menuIconAnimTop:menu}"></div>
        <div class="menuIcon" :class="{menuIconAnimMid:menu}"></div>
        <div class="menuIcon" :class="{menuIconAnimBot:menu}"></div>
      </div>
      <transition name="navigation">
        <div class="navHidden" v-if="menu">
          <router-link to="/" class="navlink">Home</router-link>
          <router-link to="/tasks" class="navlink">Dashboard</router-link>
          <router-link to="/info" class="navlink">About</router-link>
        </div>
      </transition>
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
      menu: false,
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
  padding: 10px 14px;
  cursor: pointer;
  border: 1.2px solid rgba(27,31,35,.2);
  border-radius: .3em;
  background-color: #fff;
  transition: all .5s;
}
.menuAnim {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.menuIcon {
  width: 16px;
  height: 4px;
  background-color: #2c3e50;
  margin: 2px 0;
  transition: all .5s;
}
.menuIconAnimTop {
  opacity:0.9;
  transform: scaleX(1.1);
}
.menuIconAnimMid {
  opacity:0;
}
.menuIconAnimBot {
  transform: rotate(90deg) translateX(-2px);
  opacity:0.9;
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
.navHidden:last-child {
  border-top-right-radius: .3em;
  border-bottom-right-radius: .3em;
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
.navigation-active {
  transition: all .6s ease;
}
.navigation-leave-active {
  transition: all .6s ease;
}
.navigation-enter {
  transform: translateX(-10px)
}
.navigation-leave-to {
  opacity: 0;
}
</style>
