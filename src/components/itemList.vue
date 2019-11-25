<template>
  <div>
    <transition-group name="list" tag="div">
      <span v-for="(task, id) in tasks.slice().reverse()" v-bind:key="id" class="list-item">
        <Item :task="task.task" :id="task.id" :date="task.date" />
        <button @click="$emit('del-item', task.task)" class="del-button">&times;</button>
      </span>
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
  background: gainsboro;
  border: 2px solid #ccc;
  display: flex;
  justify-content: space-between;
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
