<template>
<nav class="flex items-center justify-between flex-wrap bg-purple p-4">
  <div class="flex items-center flex-no-shrink text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <router-link tag="span" to="/" class="font-semibold text-xl tracking-tight">Checklisting Club</router-link>
  </div>
  <div class="block lg:hidden">
    <button v-on:click="openMenu" class="flex items-center px-3 py-2 border rounded text-purple-lighter border-purple-light hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>

  <!-- Hidden Menu -->
  <div id="navmenu" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
    <div class="text-sm lg:flex-grow">
      <router-link to="/lists" class="block mt-4 lg:inline-block lg:mt-0 text-purple-lighter hover:text-white mr-4">
        Lists
      </router-link>
      <router-link to="/login" class="block mt-4 lg:inline-block lg:mt-0 text-purple-lighter hover:text-white">
        Login
      </router-link>
    </div>
    <div>
      <a href="#" v-on:click="openMenu" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple hover:bg-white mt-4 lg:mt-0">Try It Out</a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
	name: 'Navbar',
  methods: {
    openMenu: function () {
      let elem = document.getElementById('navmenu');
      elem.classList.toggle('hidden');
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
