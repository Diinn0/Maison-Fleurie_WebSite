<template>
  <div>{{ token || 'no token present, are you logged in?' }}</div>
</template>

<script setup>

const headers = useRequestHeaders(['cookie']);
const { data: token } = await useFetch('/api/token', { headers })

definePageMeta({
  middleware: 'auth'
})
</script>
