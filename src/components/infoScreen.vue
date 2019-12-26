<template>
  <div>
    <h1>Perfect app!</h1>
    <h2>3 easy steps to start:</h2>
    <div class="infoScreen">
      <div class="adv" :class="{advAnim:start}">
        <p>Name your task</p>
        <p>Pick a date (if you want)</p>
        <p>Write additional comment and save!</p>
      </div>
      <div class="adv" :class="{advAnim1:start}">
        <p>Read info or delete :)</p>
      </div>
      <div class="adv" :class="{advAnim2:start}">
        <p>Filter your tasks in the list </p>
        <p>Easy way to sort</p>
        <p>Check the box when done!</p>
      </div>
    </div>
    <h3><router-link to="/tasks"> Enjoy!</router-link> </h3>
  </div>
</template>

<script>
export default {
  name: 'infoScreen',
  components: {

  },
  data(){
    return {
      start : false
    }
  },
  mounted: function(){
    this.start = true
  },
  methods: {

  }
}
</script>

<style>
.infoScreen {
  display: flex;
  justify-content:center;
  align-items: space-around;
  font-weight: 600;

}
.adv {
  margin: 0 6px;
  border: 5px double #2c3e50;
  border-radius: 10px;
  background: white;
  padding: 5px 5px;
  align-self: center;
  transition: all 3s ease;
}
.advAnim{
  animation: adv 1s ease;
}
.advAnim1{
  animation: adv 1.5s ease;
}
.advAnim2{
  animation: adv 2s ease;
}
@keyframes adv{
  0%{opacity:0;}
  100%{opacity:1; transform: rotate(360deg);}
}
</style>
