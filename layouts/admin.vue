<template>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css" rel="stylesheet" />
  <component is="script" src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></component>
  <component is="script" src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/datepicker.min.js"></component>

  <section class="h-screen dark:bg-gray-800">
    <colorModePick/>
    <slot />
  </section>
</template>

<script>
export default {
  name: "admin"
}
</script>

<style scoped>

</style>
