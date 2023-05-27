<template>
    <div class="grid gap-6 mb-6 md:grid-cols-4">
        <div>
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre de la page</label>
            <input v-model="pageName" type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Titre de la page" required>
        </div>
    </div>

    <Editor
        v-model="content"
        api-key="kc42ekl78tradwk4cx4yswl1aajy7p2conlq9krk2n67wpnd"
        :init="{
          height: '100%',
          plugins: 'lists advlist link image table code help wordcount autoresize preview'
      }"
    />

    <button @click="updatePage()" class="block mt-2 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        Sauvegarder
    </button>

</template>

<script setup>
import Editor from '@tinymce/tinymce-vue'

const route = useRoute();

  definePageMeta({
      middleware: 'auth',
      layout: 'admin'
  })

let pageName = ref("");
let content = ref("");


const {data: page} = await useFetch('/api/page/page?url=' + route.params.url, {
    method: 'GET',
});

pageName.value = page.value.title;
content.value = page.value.content;

const updatePage = async () => {
    const {data: resDataSuccess} = await useFetch('/api/page/page', {
        method: 'PATCH',
        body: {
            url: route.params.url,
            title: pageName.value,
            content: content.value,
        },
    })

    navigateTo("/admin/pages", {external: false})
}

</script>

<style scoped>

</style>
