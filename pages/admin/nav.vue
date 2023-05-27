<script setup>

definePageMeta({
    layout: "admin",
    middleware: 'auth'
});

//Fetch cats
const {data: onglets} = useFetch('/api/onglet/onglets', {
    method: 'GET',
});

let test = ref("");

console.log(onglets.value[0])

let list = ref(onglets.value);

</script>

<template>
        <div v-for="onglet in onglets" :key="onglet.id">{{onglet.name}}</div>

        <div class="flex m-10">
                <draggable class="dragArea list-group w-full" :list="list">
                        <div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
                            v-for="element in list" :key="element.name" >{{ element.name }}

                        </div>
                </draggable>
        </div>
</template>

<style scoped>

</style>
