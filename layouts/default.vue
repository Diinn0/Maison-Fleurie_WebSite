<template>
  <AppHeader />
  <slot />
  <AppFooter />
</template>

<script>

export default {
  name: "header",
  components: {
    AppHeader,
    AppFooter
  }
}

</script>

<style scoped>

</style>