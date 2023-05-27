<script setup>
  const route = useRoute()

  //Fetch cats
  const {data: page} = await useFetch('/api/page/page?url=' + route.params.url, {
    method: 'GET',
  });

  console.log(page)

  if (!page.value.content) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
  }

</script>

<template v-if="page">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 dark:text-white" v-html="page.content"></div>
</template>

<style scoped>

</style>
