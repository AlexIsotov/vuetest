<template>
  <div>
    <transition-group name="list" tag="div">
      <span v-for="(task, i) in tasks.slice().reverse()" v-bind:key="task" class="list-item">
        {{task}}
        <button @click="$emit('del-item', task)" class="del-button">&times;</button>
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
  methods: {

  }
}
</script>

<style>
.list-item {
  border: 2px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  transition: all .3s;
  margin-top: 5px;
}
.list-enter {
  opacity: 0;
  transform: translateY(-100px);
}
.list-leave-to{
  opacity: 0;
  transform: translateY(70px);
}
.del-button {
  border-radius: 50%;
  font-weight: bold;
}

</style>
