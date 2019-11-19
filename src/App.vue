<template>
  <div id="app">
    <div class="logo">
      <button class='butt' v-on:click="clicker">Clicks: {{clicks}}</button>
      <transition name="fade">
        <img v-if="clicks>10" alt="Vue logo" src="./assets/logo.png">
      </transition>
    </div>
    <AddItem title='Enter text' @add-task='addTask' />
    <ul>
      <li v-for="(task, i) of tasks" >{{i+1}}.{{task}}</li>
    </ul>
  </div>
</template>

<script>
import AddItem from '@/components/addItem'

export default {
  name: 'app',
  components: {
    AddItem
  },
  data(){
    return {
    clicks: 0,
    tasks: []
    }
  },
  methods: {
    clicker: function(){
      this.clicks += 1
    },
    addTask(task){
        if(!this.checkArr(this.tasks, task)){
          this.tasks.push(task)
          this.addAlert()
        }
        else {
          alert('You already have this task!')
        }
    },
    checkArr(arr,val) {
      return arr.some(arrVal=> val===arrVal)
    },
    addAlert(){
      alert('New Task!')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style:none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
}
.butt {
  margin: 3px;
}
.logo {
  display: flex;
  justify-content: center;
  align-items:center;
}
.fade-enter-active{
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}
</style>
