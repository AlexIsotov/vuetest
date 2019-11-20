<template>
  <div id="app">
    <div class="logo">
      <button class='butt' v-on:click="clicker">Clicks: {{clicks}}</button>
      <transition name="fade">
        <img v-if= "clicks>10" alt="Vue logo" src="./assets/logo.png">
      </transition>
    </div>
    <AddItem title='Enter text' @add-task='addTask' />
    <ItemList :tasks="tasks" @del-item="delItem"/>
  </div>
</template>

<script>
import AddItem from '@/components/addItem'
import ItemList from '@/components/itemList'

export default {
  name: 'app',
  components: {
    AddItem, ItemList
  },
  data(){
    return {
    clicks: 0,
    tasks: ['Learn Vue','Learn React','Learn JS'],
    addItem: false
    }
  },
  methods: {
    clicker: function(){
      this.clicks += 1
    },
    addTask(task){
        if(!this.checkArr(this.tasks, task)){
          this.tasks.push(task)
        }
        else {
          alert('You already have this task!')
        }
    },
    delItem(task){
        this.tasks = this.tasks.filter(t=>t !== task)
    },
    checkArr(arr,val) {
      return arr.some(arrVal=> val===arrVal)
    },
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
