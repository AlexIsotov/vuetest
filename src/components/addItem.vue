<template>
<div>
  <h1>Make your day better!</h1>
  <div class="taskarea">
    <textarea type="text" :placeholder="title" v-model="message" rows="8" cols="80" autofocus></textarea>
    <button @click='onClick'>Add task!</button>
  </div>
</div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data(){
    return{
      message:''
    }
  },
  methods: {
    onClick(){
      if(this.message.trim()){
        const task = this.message
        this.$emit('add-task', task)
        this.message =''
      }
    }

  }
}
</script>

<style>
  .taskarea {
    display: flex;
    justify-content: center;
  }
</style>
