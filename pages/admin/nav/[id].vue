<template>
  <h2 class="text-4xl font-extrabold dark:text-white mb-4">Ajouter un onglet</h2>

  <form action="#">
    <div class="grid gap-4 mb-4 sm:grid-cols-2">
      <div>
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
        <input v-model="name" type="text" name="name" id="name"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-3"
               placeholder="Nom de l'onglet" required="true">
      </div>
    </div>
    <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div class="flex">
          <div class="flex items-center mr-4">
            <input checked id="inline-radio" type="radio" value="url" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model="type">
            <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Url</label>
          </div>
          <div class="flex items-center mr-4">
            <input id="inline-2-radio" type="radio" value="page" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model="type">
            <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Page</label>
          </div>
          <div class="flex items-center mr-4">
            <input id="inline-checked-radio" type="radio" value="menu" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model="type">
            <label for="inline-checked-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Menu</label>
          </div>
        </div>
      <div></div>
      <div>
        <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">URL</label>
        <input v-model="url" type="text" name="url" id="url"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
               placeholder="URL" required="">
      </div>
      <div>
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choisissez une page</label>
        <select v-model="pageId" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected value="">Choisissez une page</option>
          <option v-for="page in pages" :value="page.id" class="dark:text-white">{{page.title}}</option>
          <option value="contact">Contact</option>
        </select>
      </div>

    </div>
    <div>
      <button type="button"
              @click="sendData()"
              class="text-white inline-flex items-center bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="mr-2 pb-1 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
        </svg>
        Modifier
      </button>

      <a href="/admin/nav" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 pb-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
        Retour
      </a>

    </div>
  </form>

</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: 'auth'
});

const route = useRoute();

const {data: pages} = useFetch('/api/page/pages', {
  method: 'GET',
});

let name = ref("");
let url = ref("");
let type = ref("url");
let pageId = ref("");

const {data: onglet} = useFetch('/api/onglet/onglet?id=' + route.params.id, {
  method: 'GET',
});

if (onglet.value) {
  name.value = onglet.value.name;
  type.value = onglet.value.type;
  if (onglet.value.pageId) {
      type.value = "page";
      pageId.value = onglet.value.pageId;
    } else {
      type.value = "url";
      url.value = onglet.value.url;
    }
} else {
  type.value = "menu"
}

  // switch (onglet.value.type) {
  //   case 'url':
  //     url.value = onglet.value.url
  //     break;
  //   case 'page':
  //
  //     break;
  // }

const sendData = async () => {

  switch (type.value) {
    case 'url':
      pageId.value = null;
      break;
    case 'page':
      if (pageId.value === "contact") {
        url.value = "/page/contact";
        pageId.value = null;
      }
      break;
    default:
      url.value= "";
      pageId.value = null;
      break;
  }

  const { data: resDataSuccess } = await $fetch('/api/onglet/onglets', {
    method: 'PATCH',
    body: {
      id: Number(route.params.id),
      name: name.value,
      url: url.value,
      pageId: pageId.value,
      updateInfo: true
    }
  })

  navigateTo("/admin/nav", {external: true})
}




</script>

<style scoped>

</style>
