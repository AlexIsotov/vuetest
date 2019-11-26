<template>
<div @click="showMore" class="task-container">
  <div  class="task-item">
    <p><strong>{{task}}</strong></p>
    <transition name="fade">
      <p v-if="show">{{date}}</p>
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
    date: String
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
  cursor:pointer;
}
.task-item {

}
.btn-container {

}

</style>
