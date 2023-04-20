<template>
  <p>{{ $route.params.id }}</p>


  <p v-if="cat">{{ cat.name }}</p>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: 'auth'
});

const route = useRoute()

//Fetch cats
const { data: cat } = useFetch('/api/cat/' + route.params.id, {
  method: 'GET',
});

</script>

<style scoped>

</style>
