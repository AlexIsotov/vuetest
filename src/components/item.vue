<template>
<div class="task-container">
  <div>
    <div class="task-item">
      <input v-bind:id="id" type="checkbox" v-bind:checked="done" />
      <label for="id" class="show-info" @click="showMore"><strong>{{task}}</strong></label>
    </div>
    <transition name="fade">
      <div v-if="show">
      <p>Date:{{date}}</p>
      <p>Until:{{dateTo}}</p>
      </div>
    </transition>
  </div>
  <div class="btn-container">
    <button @click="$emit('del-item', id)" class="del-button">&times;</button>
  </div>
</div>
</template>

<script>
export default {
  props: {
    task: String,
    id: String,
    date: String,
    dateTo: String,
    done: Boolean
  },
  data(){
    return{
      show: false
      }
  },
  methods: {
    showMore() {
      this.show=!this.show
    }
  }
}
</script>

<style>
.task-container {
  display: flex;
  justify-content: space-between;
}
.task-item {
  display:flex;
}
.show-info {
  cursor:pointer;
}
.btn-container {

}
</style>
