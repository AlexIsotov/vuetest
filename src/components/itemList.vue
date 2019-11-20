<template>
  <div>
    <transition-group name="list" tag="p">
      <span v-for="(task, i) in tasks.slice().reverse()" v-bind:key="task" class="list-item">
        {{task}}
      </span>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array
  },
  data(){
    return{

      }
  },
}
</script>

<style>
.list-item {
  border: 2px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  transition: all 1s;
}
.list-enter {
  opacity: 0;
  transform: translateY(-100px);
}

</style>
