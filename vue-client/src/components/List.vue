<template>
  <div class="container mx-auto bg-grey-lighter min-h-full">
    <div class="flex flex-col h-full">

      <div class="p-4 pb-0 text-xl tracking-normal">{{list.title}}</div>

      <div class="p-2 mb-4">
        <div class="flex justify-end">

          <button class="text-sm px-4 py-2 mr-2 border rounded text-purple bg-white hover:border-transparent hover:text-white hover:bg-purple lg:mt-0">
            Export
          </button>

          <button class="text-sm px-4 py-2 mr-2 border rounded text-purple bg-white hover:border-transparent hover:text-white hover:bg-purple lg:mt-0">
            Share
          </button>

        </div>

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
        title: 'default list title',
        items: [
          {
            title: 'item 1'
          },
          {
            title: 'item 2'
          }
        ]
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
