<template>
  <div>
    <transition-group name="list" tag="div">
      <div v-for="(task, id) in tasks" v-bind:key="task.id" class="list-item">
        <Item
        :task="task.task"
        :id="task.id"
        :date="task.date"
        :dateTo="task.dateTo"
        :done="task.done"
        @del-item="$emit('del-item', task.id)"
        @complete-task="$emit('complete-item', task.id)"/>
      </div>
    </transition-group>
  </div>
</template>

<script>
import Item from './item'

export default {
  components: {
    Item
  },
  props: {
    tasks: Array
  },
  data(){
    return{

      }
  },
  methods: {

  }
}
</script>

<style>
.list-item {
  background: #ffffe0;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: .8rem 2rem;
  transition: all .5s;
  margin-top: 5px;
}
.list-item:hover {
  background: white;
}
.list-enter {
  opacity: 0;
  transform: translateY(200px);
}
.list-leave-to{
  opacity: 0;
  transform: translateY(-200px);
}
.del-button {
  color:#fff;
  border-radius: 50%;
  font-weight: bold;
  background: crimson;
  border: solid 1px transparent;
}
.del-button:hover, .del-button:focus {
  color: crimson;
  border-color: currentColor;
  background: white;
}
</style>
