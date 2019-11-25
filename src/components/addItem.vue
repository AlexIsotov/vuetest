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
        let messageFilter = this.message.toString()
        messageFilter = messageFilter.charAt(0).toUpperCase() + messageFilter.slice(1)
        const task = {id:'1', task:messageFilter, date: Date.now().toLocaleString(), dateTo:'1', done: false} 
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
