<template>
  <section class="h-screen dark:bg-gray-800">
    <div class="container mx-auto px-6 py-12 h-full">
      <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
          <img
              src="~/assets/img/cat-garden.png"
              class="w-full"
              alt="Phone image"
          />
        </div>
        <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
          <div
          >
            <!-- Email input -->
            <p :class="{'dark:text-white' : email || !submitted, 'text-red-600' : !email && submitted, 'dark:text-red-600' : !email && submitted}">Adresse mail</p>

            <div class="mb-6">
              <input
                  id="mail"
                  ref="mail"
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  :class="!email && submitted ? 'border-red-500' :  'border-gray-300'"
                  placeholder=""
                  v-model="email"
              />
              <label v-if="!email && submitted" for="mail" class="text-xs text-red-600 dark:text-red-600">L'adresse mail est requis</label>
            </div>

            <!-- Password input -->
            <p :class="{'dark:text-white' : pass || !submitted, 'text-red-600' : !pass && submitted, 'dark:text-red-600' : !pass && submitted}">Mot de passe</p>
            <div class="mb-6">
              <input
                  id="password"
                  ref="password"
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  :class="!pass && submitted ? 'border-red-500' :  'border-gray-300'"
                  placeholder=""
                  v-model="pass"
              />
              <label v-if="!pass && submitted" for="password" class="text-xs text-red-600 dark:text-red-600">Le mot de passe est requis</label>
            </div>

            <!-- Submit button -->
            <button
                type="submit"
                class="inline-block px-7 py-3 bg-red-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                @click="mySignInHandler({ username: email, password: pass, callbackUrl: '/admin' })"
            >
              Se connecter
            </button>

            <div
                class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
            >
              <p class="text-center font-semibold mx-4 mb-0 dark:text-white">OU</p>
            </div>

            <a
                class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style="background-color: #3b5998"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
            >
              <!-- Facebook -->
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  class="w-3.5 h-3.5 mr-2"
              >
                <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
              Continuer avec Facebook
            </a>
          </div>
          <colorModePick/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
definePageMeta({
  layout: false,
  middleware: "not-auth"
});

import {toast} from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

export default {
  name: "index",
  data() {
    return {
      email: '',
      pass: '',
      submitted: false,
    }
  },
  methods: {
    async mySignInHandler({username, password, callbackUrl}) {
      this.submitted = true;

      if (this.email && this.pass) {
        const { signIn } = useAuth();
        const {error, url} = await signIn('credentials', {username, password, callbackUrl, redirect: false})
        if (error) {
          // Do your custom error handling here
          toast.error("Identifiant incorrect", {
            autoClose: 3000,
            position: toast.POSITION.BOTTOM_RIGHT
          });
        } else {
          // No error, continue with the sign in, e.g., by following the returned redirect:
          return navigateTo(url, {external: true})
        }
      }
    }
  }
}
</script>

<style scoped>

</style>

