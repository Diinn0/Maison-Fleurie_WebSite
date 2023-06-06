<script setup>
defineProps(['onglets', 'condition'])
</script>

<template>
  <li class="list-group" v-for="element2 in (onglets != null ? onglets.filter(el => el.parentId === condition) : [])" :data-id="element2.id">
    <div class="bg-gray-300 m-1 p-3 rounded-md text-center flex">
      <div class="handle nested hover:cursor-grab active:cursor-grabbing align-left">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"></path>
        </svg>
      </div>
      <div class="ml-3">{{ element2.name }}</div>
    </div>
    <div class="dragArea w-full ml-6">
      <onglet :onglets="onglets" :condition="element2.id"></onglet>
    </div>
  </li>
</template>

<style scoped>

</style>
