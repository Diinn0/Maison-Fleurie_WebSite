<template>
  <div>Bonjour {{ token.user.firstname }} {{ token.user.lastname }} !</div>
</template>

<script setup>

const headers = useRequestHeaders(['cookie']);
const { data: token } = await useFetch('/api/token', { headers })


definePageMeta({
  middleware: 'auth',
  layout: 'admin'
})
</script>
