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
      updateInfo: false
    },
  })
};


</script>

<template>
  <h2 class="text-4xl font-extrabold dark:text-white mb-4">Navbar</h2>

    <ul id="items" class="w-90% dragArea">
      <onglet :onglets="onglets" :condition="null"></onglet>
    </ul>

    <div class="inline-flex">
      <button @click="update()"
              class="block mt-2 mr-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Sauvegarder
      </button>
      <a href="/admin/nav/add" class="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
        Ajouter un onglet
      </a>
    </div>

</template>

<style scoped>

</style>
