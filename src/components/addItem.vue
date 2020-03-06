<template>
<div class="modal">
  <div class="taskarea">
    <div class="taskarea-main">
      <input type="text" v-model="message" @change="typing" placeholder="Enter your planned task" class="text-input" v-bind:class="{textInputValid:!validation}"autofocus/>
      <textarea type="text" :placeholder="title" v-model="comment" rows="8" class="text-area" ></textarea>
    </div>
    <div class="taskarea-shrink">
      <input type="date" v-model="date" v-bind:min="minDate" id="datePicker"/> <br/>
      <label class="flashContainer">
        <input type="checkbox" v-model="flash" />
        <span class="flashCheck"><img src="../assets/light.png" alt="light" width="22" height="22"/></span>
      </label>
      <button @click='onClick' class="add-btn">Add task!</button>
    </div>
  </div>
  <div class="tooltip"> <span class="tooltipText" :class="{tooltipTextAnim:hint}">Hint: Hold elements and drag to reorder them! </span> </div>
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
      comment:'',
      validation: true,
      hint: false,
      flash: false
    }
  },
  methods: {
    onClick(){
      if(this.message.trim()){
        let messageFilter = this.message.toString()
        messageFilter = messageFilter.charAt(0).toUpperCase() + messageFilter.slice(1)
        const task = {id:"id"+Math.floor(Math.random()*9999+1), task:messageFilter, date: new Date().toDateString(), dateTo:new Date(this.date).toDateString(), done: false, comment:this.comment, flash: this.flash}
        this.$emit('add-task', task)
        this.message = ''
        this.comment = ''
        this.date = today
        this.hint = true
        this.flash = false
        this.$modal.hide('addItem')
        }
      else {
        this.validation = false
      }
    },
    typing() {
      if(this.validation === false) this.validation=true
    }
  }
}
</script>

<style>
  .modal {
    padding: 0.5em;
  }
  .taskarea {
    display: grid;
    grid-template-areas:
    "taskArea dateArea";
    grid-template-columns: 1fr  25%;
    grid-gap: 5px;
    margin-top: 5px;
  }
  .taskarea-shrink {
    grid-area: dateArea;
    display: grid;
    grid-template-columns: [controls] 1fr;
    grid-auto-flow:row;
    row-gap: 2px;
  }
  .taskarea-main {
    grid-area: taskArea;
    display:grid;
    grid-template-rows: 25% 1fr;
    grid-template-areas:
    "task"
    "comment";
    grid-gap:2px;
    }
  .text-area {
    border-radius: 10px;
    resize:none;
    grid-area: comment;
  }
  .text-input{
    border: solid 1px rgb(169, 169, 169);
    border-radius: 4px;
    grid-area: task;
  }
  .textInputValid {
    border: solid 1px #ff6347;
    animation: invalid .5s 4 ease-in-out alternate;
  }
  #datePicker {
    grid-column: controls;
    grid-row:auto;
    color: #696969;;
    font-weight: bold;
    text-align: center;
    border: solid 1px rgb(169, 169, 169);
    border-radius: 4px;
    width: auto;
  }
  #datePicker::-webkit-inner-spin-button, #datePicker::-webkit-clear-button {
    display: none;
  }
  .add-btn {
    border: solid 1px transparent;
    border-radius: 4px;
    color:#fffbe8;
    padding: 0.3em 0;
    background: #a397aa;
    grid-column: span 2;
  }
  .add-btn:hover{
    color: #fff;
    outline: none;
    border-color: currentColor;
    background: linear-gradient(45deg, #cec2d5, #696969);
    animation: stripes .3s infinite linear alternate ;
  }
  @keyframes stripes {
    0% {transform: skewX(2deg) skewY(-1deg);}
    100% {transform: skewX(-2deg) skewY(1deg);}
  }
  @keyframes invalid {
    0% {transform: scaleX(0.97) }
    100% {transform: scaleX(1);}
  }
  .tooltip {
    position: relative;
  }
  .tooltip .tooltipText {
    visibility:hidden;
    background: #555;
    color: #fff;
    text-align: center;
    padding: 5px 5px;
    border-radius: 6px;
    font-size:small;
    position:absolute;
    z-index: 3;
    top: 125%;
    left: 50%;
    margin-top: 15px;
    margin-left:-100px;
    opacity:0;
  }
  .tooltip .tooltipTextAnim {
    animation: tip 4s linear .7s;


  }
  @keyframes tip {
    0% {opacity: 0; visibility: visible;}
    30% {opacity: 1;}
    95% {opacity: 0.9;}
    100% {opacity: 0; visibility:hidden}
  }
  /*custom checkbox*/
  .flashContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    user-select:none;
  }
  .flashContainer input{
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height:0;
    width:0;
  }
  .flashCheck {
    display:flex;
    align-items: center;
    justify-content: flex-end;
    padding: 2px;
    height: 25px;
    width: 25px;
    border-radius: 3px;
    background-color: #ccc;
  }
  .flashCheck:hover {
    background-color: peru;
  }
  .flashContainer input:checked ~ .flashCheck {
    background-color: crimson;
  }
  .flashCheck:after {
    content: "";
    position: absolute;
    display: none;
  }
  .flashContainer input:checked ~ .flashCheck:after {
    display: block;
  }

  /*-------*/
</style>
