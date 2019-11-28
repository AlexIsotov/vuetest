<template>
<div @mouseover="showButton=true" @mouseleave="showButton=false" class="task-container">
  <div>
    <div class="task-item">
      <div>
        <input v-bind:id="id" type="checkbox" v-bind:checked="done" @change="completeTask" />
        <label v-bind:for="id" class="show-info"><strong v-bind:class="{donetask:done}">{{task}}</strong></label>
      </div>
      <transition name="slide-fade">
        <button v-if="showButton" @click="showMore" class="btn-show">?</button>
      </transition>
    </div>
    <div class="info">
      <transition name="fade">
        <div v-if="show">
        <p>Date:{{date}}</p>
        <p>Until:{{dateTo}}</p>
        </div>
      </transition>
    </div>
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
    }
  }
}
</script>

<style>
.task-container {
  display: flex;
  justify-content: space-between;
}
.task-item, .info {
  display:flex;
  justify-content: start;
}
.show-info {
  cursor:pointer;
}
.btn-show {
  border:0;
  border-radius: 50%;
  background: dodgerblue;
  margin-left:10px;
  color: white;
}
.btn-container {

}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100px);
}
.donetask {
  text-decoration: line-through;
}
</style>
