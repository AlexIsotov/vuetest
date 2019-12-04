<template>
  <div @mouseleave="showButton=false" @mouseover="showButton=true" id="taskContainer">
      <div class="check">
        <input v-bind:id="id" type="checkbox" v-bind:checked="done" @change="completeTask" />
      </div>
      <div class="task">
        <label v-bind:for="id" ><strong v-bind:class="{donetask:done}">{{task}}</strong></label>
        <transition name="slide-fade">
            <button v-if="showButton" @click="showMore" class="btn-show">?</button>
        </transition>
      </div>
      <div class="delBtn">
        <button @click="$emit('del-item', id)" class="del-button">&times;</button>
      </div>

        <transition name="fade" >
          <div v-if="show" id="more">
            <div class="date">
              <p>Date:{{date}}</p>
              <p>Until:{{dateTo}}</p>
            </div>
            <div class="comment">
              <p>Comment: {{comment}}</p>
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
    comment: String
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
    }
  }
}
</script>

<style>
#taskContainer {
  display: grid;
  grid-template-areas:
  "check task del-btn"
  "more more more";
  grid-template-rows: 10% 1fr;
  grid-template-columns: 5% 1fr  5%;
  grid-gap: 5px;
}
.check {
  grid-area:check;
}
.task, .done-task {
    grid-area:task;
    justify-self: start;
}
.delBtn {
  grid-area:del-btn;
}
#more {
  grid-area:more;
  display:grid;
  grid-template-areas:
  "date"
  "comment";
  grid-template-rows: 1fr 2fr;
  grid-template-columns: 1fr;
  grid-gap: 1px;
}
.date {
  grid-area: date;
  justify-self: end;
  margin-right:2px;
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
  margin-left:10px;
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
