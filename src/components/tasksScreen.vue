<template>
  <div>
    <AddItem title='Create comment and don`t forget to choose date!' @add-task='addTask' />
    <div>
      <div class="tabs">
        <div class="tab" :class="{checked:this.filter}">
          <label class="tabLabel" >
            <input id="doneTab" name="a" type="radio" :value="true" v-model="filter" />
            <span>Done</span>
          </label>
        </div>
        <div class="tab" :class="{checked:!this.filter}">
          <label class="tabLabel" >
            <input id="inProgressTab" name="a" type="radio" :value="false" v-model="filter"/>
            <span> Required </span>
          </label>
        </div>
      </div>
      <div class="content">
        <ItemList :tasks="tasks" :filter="filter" @del-item="delItem"
        @complete-item="completeItem" @save-order="saveOrder"/>
      </div>
    </div>
  </div>
</template>

<script>
import AddItem from '@/components/addItem'
import ItemList from '@/components/itemList'

const data=[{ id:'1', task:'Learn Vue', date:'Always', dateTo:'Always',done:false, comment:''},
        { id:'2', task:'Learn React', date:'Always', dateTo:'Always',done:true, comment:''},
        { id:'3', task:'Learn JS', date:'Always', dateTo:'Always',done:false, comment:'No comments'}
       ]
export default {
  name: 'tasks',
  components: {
    AddItem, ItemList
  },
  data(){
    return {
      tasks: data ,
      addItem: false,
      filter: false,
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
              this.tasks[i].done = true
          }
          else {this.tasks[i].done = false}
        }
      }
    },
    checkArr(arr,val) {
      return arr.some(arrVal=> val===arrVal.task)
    },
    saveOrder(arr) {
      this.tasks = arr
    },
  }
}
</script>

<style>
.tabs {
  display:flex;
  justify-content: flex-start;
  margin-top: 5px;
  margin-bottom: -1px;
}
.tab {
  background: lightyellow;
  padding: 15px;
  border: 1px solid #ccc;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position:relative;
}
.tabLabel {
  cursor: pointer;
}
.tab [type=radio] {
  display: none;
}
.content {
  padding: 5px;
  background: #ffe485;
  border: 1px solid #ccc;
  border-radius: 6px;
  border-top-left-radius:0;
  z-index:2;
}
.checked {
  background: #ffe485;
  border-bottom: 1px solid #ffe485;
  z-index:1;
}

</style>
