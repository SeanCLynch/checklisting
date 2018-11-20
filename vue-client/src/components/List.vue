<template>
  <div class="container mx-auto">
    <div class="bg-grey-lighter flex flex-col h-full">

      <div class="flex text-right px-4 py-2 m-2">
        <div class="flex-1 items-center text-left px-4">{{list.title}}</div>

        <button class="text-sm px-4 py-2 leading-none border rounded text-purple bg-white hover:border-transparent hover:text-white hover:bg-purple mt-4 lg:mt-0">
          Export
        </button>

        <button class="text-sm px-4 py-2 leading-none border rounded text-purple bg-white hover:border-transparent hover:text-white hover:bg-purple mt-4 lg:mt-0">
          Share
        </button>
      </div>

      <item></item>
      <item></item>
      <item></item>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Item from '@/components/Item.vue';

export default {
	name: 'List',
	components: {
		'item': Item
	},
  data() {
    return {
      list: {
        title: 'default'
      }
    };
  },
  methods: {
    getList() {
      const path = "http://localhost:4000/list/" + this.$route.params.id;
      axios.get(path, {
        responseType: 'json'
      })
      .then((res) => {
        console.log(res);
        this.list = res.data;
      })
      .catch((error) => {
        console.error(error);
      });
    }
  },
  created() {
    this.getList();
  }
};
</script>
