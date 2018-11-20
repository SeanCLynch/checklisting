<template>
  <div class="container mx-auto">
    <div class="bg-grey flex flex-col h-full">
      <div>Hero Image & Tagline / Call to Action</div>
      <div>What is it? & Features</div>
      <div>Social Proof</div>
      <div>Pricing</div>
      <div>Call to Action</div>
      <div>Footer</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

export default {
	name: 'Homepage',
  components: {
    'navbar': Navbar,
  }
};
</script>
