<script setup>
defineProps(['onglets', 'condition']);

const deleteOnglet = async (id) => {
  const {data: resDataSuccess} = await useFetch('/api/onglet/onglet', {
    method: 'DELETE',
    body: {
      id: id,
    }
  })

  await refreshNuxtData();
}

</script>

<template>
  <li class="list-group" v-for="element2 in (onglets != null ? onglets.filter(el => el.parentId === condition) : [])" :data-id="element2.id">
    <div class="bg-gray-300 m-1 p-3 rounded-md text-center flex">
      <div class="handle nested hover:cursor-grab active:cursor-grabbing align-left grow-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"></path>
        </svg>
      </div>
      <div class="ml-3 grow w-90% text-left">{{ element2.name }}</div>
      <div class="align-right grow-0">
        <button class="hover:cursor-pointer" @click="deleteOnglet(element2.id)">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-red-700 w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
    <div class="dragArea w-full ml-6">
      <onglet :onglets="onglets" :condition="element2.id"></onglet>
    </div>
  </li>
</template>

<style scoped>

</style>
