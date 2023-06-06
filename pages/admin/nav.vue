<script setup>

import Onglet from "~/components/onglet.vue";

definePageMeta({
  layout: "admin",
  middleware: 'auth'
});

useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js",
      type: "text/javascript",
      async: false,
    },
  ]
})

//Fetch cats
const {data: onglets} = useFetch('/api/onglet/onglets', {
  method: 'GET',
});

let root = null;

onMounted(() => {
  // let el = document.getElementsByClassName('dragArea');
  let nestedSortables = [].slice.call(document.querySelectorAll('.dragArea'));

  for (let i = 0; i < nestedSortables.length; i++) {
    new Sortable(nestedSortables[i], {
      animation: 150,
      ghostClass: 'blue-background-class',
      handle: '.handle',
      group: 'nested',
      fallbackOnBody: true,
      swapThreshold: 0.65,
      invertSwap: true,
    });
  }

  root = document.getElementById('items');

});

const nestedQuery = '.dragArea';
const identifier = 'id';

function getParents(root) {
  let serialized = [];
  let elements = document.getElementsByClassName("list-group");
  for (let i = 0; i < elements.length; i++) {
    serialized.push({
      id: +elements[i].dataset[identifier],
      parent: elements[i].parentNode.tagName === "ul" ? null : elements[i].parentNode.parentNode.dataset[identifier]
    });
  }
  return serialized;
}

const update = async () => {
  const {data: resDataSuccess} = await useFetch('/api/onglet/onglets', {
    method: 'PATCH',
    body: {
      onglets: getParents(root),
    },
  })
};

</script>

<template>
  <h1 class="text-2xl dark:text-white mb-4">Navbar</h1>

    <ul id="items" class="w-full dragArea">
      <onglet :onglets="onglets" :condition="null"></onglet>
    </ul>

  <button @click="update()"
          class="block mt-4 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
    Sauvegarder
  </button>
</template>

<style scoped>

</style>
