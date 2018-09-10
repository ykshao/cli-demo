<template>
  <div id="greeter"> {{greeter}} </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        greeter: 'Hello, Talk Vue.'
      }
    }
  }
</script>

