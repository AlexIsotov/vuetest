<template>
  <div>
    <transition-group name="list" tag="div">
      <div v-for="(task, id) in tasks" v-bind:key="task.id" class="list-item">
        <Item :task="task.task" :id="task.id" :date="task.date" :dateTo="task.dateTo" :done="task.done" @del-item="delItem"/>
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
    delItem(id) {
      this.$emit('del-item', id)
    }
  }
}
</script>

<style>
.list-item {
  background: gainsboro;

  border: 2px solid #ccc;

  padding: .5rem 2rem;
  transition: all .3s;
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
  border: 0;
}
</style>
