<template>
  <div>
    <draggable v-model="tasksMutable" @end="save" @start="reload" delay="100">
      <transition-group name="list" tag="div">
        <div v-for="(task, id) in tasks" v-bind:key="task.id" v-if="task.done===filter" class="list-item">
          <Item
          :task="task.task"
          :id="task.id"
          :date="task.date"
          :dateTo="task.dateTo"
          :done="task.done"
          :comment="task.comment"
          @del-item="$emit('del-item', task.id)"
          @complete-task="$emit('complete-item', task.id)"
          />
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import Item from './item'
import draggable from 'vuedraggable'

export default {
  components: {
    Item,
    draggable,
  },
  props: {
    tasks: Array,
    filter: Boolean
  },
  data(){
    return{
      tasksMutable: this.tasks
      }
  },
  methods: {
    save() {
      this.$emit('save-order', this.tasksMutable)
    },
    reload() {
      this.tasksMutable = this.tasks
    }
  }
}
</script>

<style>
.list-item {
  transition: all .3s;
}
.list-enter {
  opacity: 0;
  transform: translateY(-100px);
}
.list-leave-to{
  opacity: 0;
  transform: translateY(100px);
}
.del-button {
  color:#fff;
  outline:none;
  border-radius: 50%;
  font-weight: bold;
  background: crimson;
  border: solid 1px transparent;
  transition: 1s;
}
.del-button:hover, .del-button:focus {
  color: crimson;
  border-color: currentColor;
  background: white;
  transform: rotate(360deg);
}
.sortable-chosen {
  border:2px solid gray;
}
</style>
