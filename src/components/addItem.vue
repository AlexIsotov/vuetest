<template>
<div>
  <h1>Make your day better!</h1>
  <div class="taskarea">
    <textarea type="text" :placeholder="title" v-model="message" rows="8" cols="80" autofocus></textarea>
    <div class="taskarea-shrink">
      <input type="date" v-model="date" v-bind:min="minDate" />
      <button @click='onClick'>Add task!</button>
    </div>
  </div>
</div>
</template>

<script>
const today = new Date().toISOString().split("T")[0]
export default {
  props: {
    title: String
  },
  data(){
    return{
      message:'',
      date: today,
      minDate: today,
    }
  },
  methods: {
    onClick(){
      if(this.message.trim()){
        let messageFilter = this.message.toString()
        messageFilter = messageFilter.charAt(0).toUpperCase() + messageFilter.slice(1)
        const task = {id:"id"+Math.floor(Math.random()*9999+1), task:messageFilter, date: new Date().toDateString(), dateTo:new Date(this.date).toDateString(), done: false}
        this.$emit('add-task', task)
        this.message =''
        this.date = today
      }
    }

  }
}
</script>

<style>
  .taskarea {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .taskarea-shrink {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 5px;
  }
</style>
