<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import 'vue-router';
import '@/assets/styles/main.css'
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    'navbar': Navbar
  }
};
</script>

<style>
</style>
