<template>

  <p>Liste des chats</p>

  <table>
    <thead>
    <tr>
      <th>Nom du chat</th>
      <th>Sexe</th>
      <th>Date de naissance</th>
      <th>Age</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="cat in cats">
      <td>{{ cat.name }}</td>
      <td>{{ cat.male === true ? "Male" : "Femelle"}}</td>
      <td>{{ $dateFormat(new Date(cat.dateofbirth)) }}</td>
      <td>{{ $getAge(new Date(cat.dateofbirth)) }} ans</td>
    </tr>
    </tbody>
  </table>


</template>

<script setup lang="ts">

//Fetch cats
const { data: cats } = useFetch('/api/cats/cats', {
  method: 'GET',
});

const { $dateFormat, $getAge } = useNuxtApp()


</script>

<style scoped>

</style>