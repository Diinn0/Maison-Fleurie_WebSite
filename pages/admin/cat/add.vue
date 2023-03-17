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
      name: "Omega",
      description: "C'est un chat",
      sexe: "Male",
      dateOfBirth: new Date(),
      sellable: false,
      status: "Unavailable"
    }
  })
}

</script>

<style scoped>

</style>
