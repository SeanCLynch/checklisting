<template>
  <div class="flex flex-col h-full">
    <div class="flex-none bg-red h-12">Admin</div>
    <div class="flex-grow bg-blue">Lists</div>
    <div class="flex-none bg-green h-12">Items</div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Item from '@/components/Item.vue';

export default {
	name: 'Homepage',
	components: {
		'navbar': Navbar,
		'sidebar': Sidebar,
		'item': Item
	}
};
</script>
