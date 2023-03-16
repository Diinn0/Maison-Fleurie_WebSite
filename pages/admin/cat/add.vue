<template>

  <button class="dark:text-white" @click="sendData()">Send data</button>

</template>

<script setup>

definePageMeta({
  layout: "admin",
  middleware: 'auth'
});

const sendData = async () => {
  const { data: resDataSuccess } = await useFetch('/api/cats/cat', {
    method: 'post',
    body: {
      name: "Eros",
      description: "C'est un chat",
      sexe: 0,
      dateOfBirth: new Date(),
      sellable: false
    }
  })
}

</script>

<style scoped>

</style>
