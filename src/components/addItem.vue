<template>
<div>
  <input type="text" :placeholder="title" v-model="message">
  <button @click='onClick'>Add task!</button>
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
      const task = this.message
      this.$emit('add-task', task)
      this.message =''
    }

  }
}
</script>
