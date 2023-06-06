<template>
    <h2 class="text-4xl font-extrabold dark:text-white mb-4">Liste des pages</h2>

    <div class="flex m-5">
        <button id="defaultModalButton" @click="createModal.show()"
                class="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Créer une page
        </button>
    </div>

    <div class="grid grid-cols-4 gap-4">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" v-for="page in pages">
            <a href="#">
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ page.title }}</h5>
                <NuxtLink :href="'/admin/page/' + page.url" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Modifier
<!--                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>-->
                </NuxtLink>
                <a @click="deletePage(page.url)" class="hover:cursor-pointer inline-flex items-center m-2 px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                    Supprimer
<!--                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>-->
                </a>
            </div>
        </div>
    </div>

    <ModalsCreatePage @close-modal="createModal.hide()"/>
</template>

<script setup>
import {Modal} from 'flowbite';

let createModal = null;

onMounted(() => {
    //Setup modals
    // options with default values
    const options = {
        placement: 'bottom-right',
        backdrop: 'dynamic',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
        closable: true,
    };

    createModal = new Modal(document.getElementById('createPage'), options);
});

definePageMeta({
  middleware: 'auth',
  layout: 'admin'
})

const {data: pages} = useFetch('/api/page/pages', {
    method: 'GET',
});

const deletePage = async (url) => {
  const {data: resDataSuccess} = await useFetch('/api/page/page', {
    method: 'DELETE',
    body: {
      url: url,
    }
  })

  await refreshNuxtData();
}

</script>

<style scoped>

</style>
