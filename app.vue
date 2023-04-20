<template>
  <Head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css" rel="stylesheet" />
      <component is="script" src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></component>
      <component is="script" src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/datepicker.min.js"></component>


  </Head>
  <Body class="dark:bg-gray-900">
      <NuxtLayout>
          <NuxtPage/>
      </NuxtLayout>
  </Body>
</template>

<script>
export default {
    name: "app"
}
</script>

<style scoped>

</style>