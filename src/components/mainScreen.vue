<template>
  <div class="mainScreen">
    <h1 class="mainText">Make your day better!</h1>
    <div class="logo">
        <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <h3 class="secText" :class="{secTextAnim:anim}">If you don't want to forget the task write it here</h3>
    <div class="choice" :class="{choiceAnim:anim}">
      <div class="dash">
        <router-link to="/tasks" class="mainBtn">Dashboard</router-link>
        <span class="hint">Create tasks, sort and complete them! </span>
      </div>
      <div class="learn">
        <router-link to="/info" class="mainBtn">Learn more</router-link>
        <span class="hint">Read information how to use this app. </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainScreen',
  components: {

  },
  data(){
    return {
      anim: false
    }
  },
  mounted: function() {
    this.anim = true
  },
  methods: {

  }
}
</script>

<style>
.mainScreen {
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
}
.choice {
  display:flex;
  justify-content:center;
}
.dash, .learn {
  display:flex;
  flex-direction: column;
  color: #9A9DD3;

}
.hint {
  opacity:0;
  transition: .8s;
}
.logo {
  display: flex;
  justify-content: center;
  align-items:center;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.mainText {
  position: relative;
  animation: texted 1s infinite linear alternate;
}
.secText {
  color: #9A9DD3;
}
.secTextAnim {
  animation: sectext 2s ease-in;
}
.choiceAnim{
  animation: sectext 2s ease-out;
}
@keyframes texted {
  0% {left: 5px;}
  100% {left: -5px;}
}
@keyframes image {
  0% {transform: rotate(180deg) scale(0.2 ,0.2); }
  100% {transform: rotate(0deg) scale(1 ,1);}
}
@keyframes sectext {
  0% {opacity:0;}
  100% { opacity:1;}
}
.mainBtn {
    position: relative;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 800;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid rgba(27,31,35,.2);
    border-radius: .25em;
    color: #5C5D7D;
    background-color: #fff;
    text-decoration: none;
    margin: 1em;
}
.mainBtn:hover {
  color: #fff;
  background-color: #6B6EA7;
  background-image: none;
  border-color: #6B6EA7;

}
.mainBtn:hover ~.hint {
  opacity:1;
}
</style>
