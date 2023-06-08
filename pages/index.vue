<template>
    <div class="p-4 space-y-4">
      <div class="flex flex-col items-center">
        <h1 class="text-3xl font-bold text-center dark:text-white">Bienvenue à notre élevage de Maine Coon!</h1>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cats: [
        {
          name: 'Fluffy',
          image: '/path/to/image.jpg',
          description: 'Fluffy est un chat magnifique avec une personnalité douce.',
        },
        // Plus de chats ici...
      ],
    };
  },
};
</script>

<style scoped>

</style>
