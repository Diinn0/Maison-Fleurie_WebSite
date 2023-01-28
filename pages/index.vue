<template>
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" />


</template>

<script>
export default {
  name: "index",
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style scoped>

</style>