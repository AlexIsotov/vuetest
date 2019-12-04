<template>
<div>
  <h1 class="main-text">Make your day better!</h1>
  <h3>If you don't want to forget the task write it here</h3>
  <div class="taskarea">
    <div class="taskarea-main">
      <input type="text" v-model="message" placeholder="Enter your planned task" class="text-input" autofocus/>
      <textarea type="text" :placeholder="title" v-model="comment" rows="8" cols="80" class="text-area" ></textarea>
    </div>
    <div class="taskarea-shrink">
      <label for:id="datePicker" class="dateLabel">Date to:</label>
      <input type="date" v-model="date" v-bind:min="minDate" id="datePicker"/>
      <button @click='onClick' class="add-btn">Add task!</button>
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
      comment:''
    }
  },
  methods: {
    onClick(){
      if(this.message.trim()){
        let messageFilter = this.message.toString()
        messageFilter = messageFilter.charAt(0).toUpperCase() + messageFilter.slice(1)
        const task = {id:"id"+Math.floor(Math.random()*9999+1), task:messageFilter, date: new Date().toDateString(), dateTo:new Date(this.date).toDateString(), done: false, comment:this.comment}
        this.$emit('add-task', task)
        this.message =''
        this.comment=''
        this.date = today
      }
    }

  }
}
</script>

<style>
  .main-text {
    position: relative;
    animation: texted 1s infinite ease alternate;
  }
  .taskarea {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .taskarea-shrink {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }
  .taskarea-main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    }
  .text-area {
    border-radius: 10px;
    resize:none;
  }
  .text-input{
    border: solid 1px rgb(169, 169, 169);
    border-radius: 4px;
    margin:2px;
  }
  .dateLabel {
    font-size: 10px;
    align-self:start;
  }
  .add-btn {
    border: solid 1px transparent;
    border-radius: 4px;
    color:#fffbe8;
    padding: 0.5em 1em;
    background: #a397aa;
  }
  .add-btn:hover{
    color: #fff;
    outline: none;
    border-color: currentColor;
    background: linear-gradient(120deg, #cec2d5, #696969);
    animation: stripes .5s linear reverse ;
  }
  @keyframes stripes {
    0% {background-position: 120px 0;}
    100% {background-position: 0 0;}
  }
  @keyframes texted {
    0% {left: 5px;}
    100% {left: -5px;}

  }
</style>
