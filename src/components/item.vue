<template>
  <div v-bind:id="id" @mouseleave="showButton=false" @mouseover="showB===true?showButton=true:showButton=false" class="taskContainer" v-bind:class="{taskContainerImportant:flash}">
    <div class="taskItem">
      <div class="check">
        <label class="container">
          <input type="checkbox" v-bind:checked="done" @change="completeTask" />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="task">
        <span><strong v-bind:class="{donetask:done}">{{task}}</strong></span>
        <img v-if="flash" src="../assets/light.png" alt="light" width="16" height="16"/>
        <transition name="slide-fade">
            <button v-if="showButton" @click="showMore" class="btn-show">?</button>
        </transition>
      </div>
      <div class="delBtn">
        <button @click="$emit('del-item', id)" class="del-button">&times;</button>
      </div>
    </div>
    <transition name="fade" >
      <div v-if="show" id="more">
        <div class="date">
          <p>Date:{{date}}</p>
          <p>Until:{{dateTo}}</p>
        </div>
        <div class="comment">
          <p><strong>Comment:</strong> {{comment}}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  props: {
    task: String,
    id: String,
    date: String,
    dateTo: String,
    done: Boolean,
    comment: String,
    showB: Boolean,
    flash: Boolean
  },
  data(){
    return{
      showButton:false,
      show: false,
      complete: false,
      }
  },
  methods: {
    showMore() {
      this.show=!this.show
    },
    completeTask(){
      this.line = "line-through"
      this.$emit('complete-task')
      if(this.done!==true) {this.show=false}
    },
  }
}
</script>

<style>
.taskContainer {
  display: grid;
  grid-template-areas:
  "taskItem"
  "more";
  grid-template-rows: 15% 1fr;
  grid-gap: 3px;
  background: #ffffe0;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 0.8rem 2rem;
  margin: 3px 0;
}
.taskContainer:hover {
  background: white;
}
.taskContainerImportant {
  background: #f5dddf;
}
.taskItem {
  grid-area: taskItem;
  display: grid;
  grid-template-areas:
  "check task del-btn";
  grid-template-columns: 15% 1fr 15%;
  grid-gap: 5px;
}
.check {
  grid-area:check;
}
/*custom checkbox*/
.container {
  display: block;
  position:relative;
  cursor:pointer;
  user-select:none;
}
.container input{
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height:0;
  width:0;
}
.checkmark {
  position: absolute;
  top:0;
  left:0;
  height: 25px;
  width: 25px;
  background-color: #ccc;
}
.container:hover input ~ .checkmark {
  background-color: #eee8aa;
}
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
/*-------*/
.task, .done-task {
    grid-area:task;
    justify-self: start;
    font-size: large;
    align-self:start;
}
.delBtn {
  grid-area:del-btn;
  align-self: start;
  justify-self: end;
}
#more {
  grid-area:more;
  display:grid;
  grid-template-areas:
  "date"
  "comment";
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-gap: 3px;
  border: 1px solid #ccc;
}
.date {
  grid-area: date;
  justify-self: end;
  margin-right:2px;
  font-size: 13px;
}
.comment {
  grid-area: comment;
  justify-self: start;
  margin: 2px;
}
.btn-show {
  border: solid 1px transparent;
  outline:none;
  border-radius: 50%;
  background: dodgerblue;
  margin-left:2px;
  color: white;
  transition: .5s;
}
.btn-show:hover {
  color: dodgerblue;
  border-color: currentColor;
  background: white;
  transform: rotate(360deg);
}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(5px);
}
.donetask {
  text-decoration: line-through;
}

</style>
