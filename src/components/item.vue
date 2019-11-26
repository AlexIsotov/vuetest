<template>
<div class="task-container">
  <div class="task">
    <p>{{task}}</p>
    <p>{{date}}</p>
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

  }
}
</script>

<style>
.task-container {
  display: flex;
  justify-content: space-between;
}
.task {


}
.btn-container {


}

</style>
