<template>
  <div id="app">
    <div class="logo">
        <img alt="Vue logo" src="./assets/logo.png" class="main-img">
    </div>
    <AddItem title='Create new task and pick a date' @add-task='addTask' />
    <ItemList :tasks="tasks" @del-item="delItem" @complete-item="completeItem"/>
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
    tasks: [{ id:'1', task:'Learn Vue', date:'Always', dateTo:'Always',done:false, comment:''},
            { id:'2', task:'Learn React', date:'Always', dateTo:'Always',done:true, comment:''},
            { id:'3', task:'Learn JS', date:'Always', dateTo:'Always',done:false, comment:'No comments'}
           ],
    addItem: false
    }
  },
  methods: {
    addTask(task){
        if(!this.checkArr(this.tasks, task.task)){
          this.tasks.unshift(task)
        }
        else {
          alert('You already have this task!')
        }
    },
    delItem(id){
        this.tasks = this.tasks.filter(t=>t.id !== id)
    },
    completeItem(idItem) {
      for(let i=0;i<this.tasks.length;i++) {
        if(this.tasks[i].id.toString()==idItem) {
          if(this.tasks[i].done!==true) {
          //let accept = confirm("Do you agree to close this task?")
          //  if(accept) {
              this.tasks[i].done = true
          //  }
          }
          else {this.tasks[i].done = false}
        }
      }
    },
    checkArr(arr,val) {
      return arr.some(arrVal=> val===arrVal.task)
    },
  }
}
</script>

<style>
html {
  background: linear-gradient(to top left, khaki, lightyellow);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
.logo {
  display: flex;
  justify-content: center;
  align-items:center;
}
.main-img {
  transition: .5s;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.main-img:hover {
  transform: rotate(180deg) scale(0.5, 0.5);
}
</style>
