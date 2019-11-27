<template>
  <div id="app">
    <div class="logo">
        <img alt="Vue logo" src="./assets/logo.png">
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
    tasks: [{ id:'1', task:'Learn Vue', date:'Always', dateTo:'Always',done:false},
            { id:'2', task:'Learn React', date:'Always', dateTo:'Always',done:true},
            { id:'3', task:'Learn JS', date:'Always', dateTo:'Always',done:false}
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
    checkArr(arr,val) {
      return arr.some(arrVal=> val===arrVal.task)
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
.logo {
  display: flex;
  justify-content: center;
  align-items:center;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-enter {
  opacity: 0;
}
</style>
