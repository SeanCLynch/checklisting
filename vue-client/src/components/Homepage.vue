<template>
  <div class="container mx-auto h-full">
    <div class="bg-grey flex flex-col h-full">

      <!-- Hero & Tagline -->
      <div class="flex flex-col bg-purple-lighter h-screen">
        <div class="text-center">Hero Text</div>
        <div class="text-center">Call to Action</div>
      </div>

      <!-- What is it? -->
      <div class="flex-1 text-center p-4 text-purple">A principled, collaborative checklist editor.</div>

      <!-- Features -->
      <div class="flex text-center p-4">
        <div class="flex-1">Feature 1</div>
        <div class="flex-1">Feature 2</div>
        <div class="flex-1">Feature 3</div>
        <div class="flex-1">Feature 4</div>
      </div>

      <div class="flex h-64">Social Proof</div>
      <div class="flex">Pricing</div>
      <div class="flex">Call to Action</div>
      <div class="flex">Footer</div>
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
