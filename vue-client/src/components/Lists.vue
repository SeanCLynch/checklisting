<template>
  <div class="container mx-auto">
    <div class="bg-grey-lighter flex flex-col h-full">

      <div class="px-4 py-2 m-2">
        <button class="text-sm px-4 py-2 leading-none border rounded text-purple bg-white hover:border-transparent hover:text-white hover:bg-purple mt-4 lg:mt-0">
          Create New List
        </button>
      </div>

      <div class="flex text-grey-darker bg-grey-light px-4 py-2 m-2" v-for="list in lists">
        <div class="flex-1 px-4">
          <router-link :to="{ name: 'List', params: { id: list.id }}">
            {{ list.title }}
          </router-link>
        </div>
        <div class="flex-1"></div>
        <div class="flex-1"></div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

export default {
	name: 'lists',
  components: {
    'navbar': Navbar,
  },
  data() {
    return {
      lists: []
    };
  },
  methods: {
    getLists() {
      const path = "http://localhost:4000/lists";
      axios.get(path, {
        responseType: 'json'
      })
      .then((res) => {
        console.log(res);
        this.lists = res.data;
      })
      .catch((error) => {
        console.error(error);
      });
    }
  },
  created() {
    this.getLists();
  }
};
</script>
