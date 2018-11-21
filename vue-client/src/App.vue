<template>
  <div id="app" class="h-full">
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
html, body {
  height: 100%;
}
</style>
