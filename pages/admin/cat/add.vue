<template>

  <form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
        <input type="text"
               id="first_name"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder=""
               v-model="name"
               required>
      </div>
      <div>
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <input type="text"
               id="last_name"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder=""
               v-model="description"
               required>
      </div>
      <div>
        <label for="sexes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexe</label>
        <select id="sexes"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="sexe"
                required>
          <option value="Male">Male</option>
          <option value="Femelle">Femelle</option>
        </select>
      </div>
      <div>
        <label for="birthDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date de naissance</label>
        <div class="relative max-w-sm">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
          </div>
          <input id="birthDate"
                 datepicker
                 type="text"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Selectionner une date"
                 ref="dateOfBirth"
                 required>
        </div>
      </div>

    </div>

    <button @click="sendData()" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

    <a href="/admin/cats"
       class="ml-1 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Retour</a>
  </form>

</template>

<script setup>

let name = "";
let description = "";
let sexe = "";
let dateOfBirth = "";

definePageMeta({
  layout: "admin",
  middleware: 'auth'
});


const sendData = async () => {
  const { data: resDataSuccess } = await useFetch('/api/cat/cat', {
    method: 'post',
    body: {
      name: name,
      description: description,
      sexe: sexe,
      dateOfBirth: new Date(window.document.getElementById("birthDate").value),
      sellable: false,
      status: "Unavailable"
    }
  })

  name = "";
  description = "";
  sexe = "";
  dateOfBirth = "";
}

</script>

<style scoped>

</style>
