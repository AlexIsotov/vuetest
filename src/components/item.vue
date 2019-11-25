<template>
<div>
   {{task}} : {{id}} : {{date}}
</div>
</template>

<script>
export default {
  props: {
    task: String,
    id: String,
    date: String
  },
  data(){
    return{
      show: false
      }
  },
  methods: {

  }
}
</script>

<style>


</style>
