<template>
<div @mouseover="showButton=true" @mouseleave="showButton=false" class="task-container">
  <div>
    <div class="task-item">
      <input v-bind:id="id" type="checkbox" v-bind:checked="done" @change="$emit('complete-task')" />
      <label v-bind:for="id" class="show-info"><strong>{{task}}</strong></label>
      <transition name="slide-fade">
        <button v-if="showButton" @click="showMore">?</button>
      </transition>
    </div>
    <transition name="fade">
      <div v-if="show">
      <p>Date:{{date}}</p>
      <p>Until:{{dateTo}}</p>
      </div>
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
    date: String,
    dateTo: String,
    done: Boolean
  },
  data(){
    return{
      showButton:false,
      show: false,
      complete: false
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
}
.task-item {
  display:flex;
}
.show-info {
  cursor:pointer;
}
.btn-container {

}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100px);
}
</style>
