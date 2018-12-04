<template>
  <div class="container mx-auto bg-grey-lighter min-h-full">

    <div class="p-4 font-sans font-medium tracking-normal">
      Samples
    </div>

    <div class="p-2 flex flex-col">
      <div class="p-2 mb-2 bg-grey rounded">
        Text
      </div>
      <div class="p-2 bg-grey rounded">
        Text
      </div>
    </div>

    <div class="p-2 text-right">
      <button class="bg-purple hover:bg-purple-dark text-sm text-white font-bold py-2 px-4 rounded">
        Create New Checklist
      </button>
    </div>

    <div class="p-2 flex flex-col">
      <div class="p-2 mb-2 bg-grey rounded" v-for="list in lists">
        <router-link :to="{ name: 'List', params: { id: list.id }}">
          {{ list.title }}
        </router-link>
      </div>
    </div>


  <!--
      <div class="flex-1 p-4">
        <button class="text-sm px-4 py-2 leading-none border rounded text-purple bg-white hover:border-transparent hover:text-white hover:bg-purple lg:mt-0">
          Create New List
        </button>
      </div>

    <div class="flex flex-col">
      <div class="flex text-grey-darker bg-grey-light px-4 py-2 m-2 rounded" v-for="list in lists">
        <div class="flex-1">
          <router-link :to="{ name: 'List', params: { id: list.id }}">
            {{ list.title }}
          </router-link>
        </div>
        <div class="flex-1"></div>
        <div class="flex-1"></div>
      </div>


      <div class="flex-1 flex align-content-end p-4">
        <button class="text-sm px-4 py-2 leading-none border rounded text-purple bg-white hover:border-transparent hover:text-white hover:bg-purple lg:mt-0">
          Create New List
        </button>
      </div>


      <div class="flex text-grey-darker bg-grey-light px-4 py-2 m-2 rounded" v-for="list in lists">
        <div class="flex-1">
          <router-link :to="{ name: 'List', params: { id: list.id }}">
            {{ list.title }}
          </router-link>
        </div>
        <div class="flex-1"></div>
        <div class="flex-1"></div>
      </div>

    </div>
    -->

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
