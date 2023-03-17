<template>
  <p>{{ $route.params.id }}</p>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: 'auth'
});

</script>

<style scoped>

</style>
