<template>
  <div class="container mx-auto bg-grey-lighter min-h-full">
    <div class="mx-auto lg:w-3/5">
      <div class="flex flex-col h-full">

        <form id="test">

        <div class="p-2 mt-2 text-xl tracking-normal">
          <input type="text" v-model="list.title" class="bg-grey-light appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple">
        </div>

        <div class="p-2 mb-2">
          <div class="flex justify-end">
            <button v-on:click="deleteList" class="text-sm px-4 py-2 mr-2 border rounded text-purple bg-white hover:border-transparent hover:text-white hover:bg-purple lg:mt-0">
              Delete
            </button>

            <button v-on:click="saveList" class="text-sm px-4 py-2 mr-2 border rounded text-purple bg-white hover:border-transparent hover:text-white hover:bg-purple lg:mt-0">
              Save
            </button>

            <button class="text-sm px-4 py-2 mr-2 border rounded text-purple bg-white hover:border-transparent hover:text-white hover:bg-purple lg:mt-0">
              Export
            </button>

            <button class="text-sm px-4 py-2 mr-2 border rounded text-purple bg-white hover:border-transparent hover:text-white hover:bg-purple lg:mt-0">
              Share
            </button>

	    <button class="text-sm px-4 py-2 mr-2 border rounded text-purple bg-white hober:border-transparent hover:text-white hover:bg-purple lg:mt-0">
	      Fork
	    </button>

          </div>
        </div>

        <div class="p-2 rounded" v-for="checklist_item in list.items">
          <item v-bind:checklist_item="checklist_item"></item>
        </div>

        <div class="p-2 mb-4">
          <div class="flex justify-end">

            <button v-on:click="addItem" class="px-4 py-2 mr-2 border rounded text-white bg-purple hover:border-transparent hover:text-purple hover:bg-white lg:mt-0">
              <span class=""><i class="feather-16" data-feather="plus"></i> Add Item</span>
            </button>

          </div>
        </div>

        </form>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import '@/assets/feather.min.js';
import Item from '@/components/Item.vue';

export default {
	name: 'List',
  props: ['creatingList'],
	components: {
		'item': Item
	},
  data() {
    return {
      list: {
        title: 'New list',
        items: [
          {
            description: 'First Thing'
          },
          {
            description: 'Second Thing'
          }
        ]
      }
    };
  },
  methods: {
    deleteList() {
      let path = "http://localhost:4000/list/" + this.$route.params.id;
      axios.delete(path)
      .then((res) => {
        console.log('delete list', res);
        this.$router.push('/lists');
      })
      .catch((error) => {
        console.error(error);
      });
    },
    saveList() {
      if (this.$route.params.id > 0) {
        console.log('updating list', this.list);
        const path = "http://localhost:4000/list/" + this.$route.params.id;
        axios.put(path, this.list)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
      } else {
        console.log('creating list', this.list);
        const path = "http://localhost:4000/list";
        axios.post(path, this.list)
        .then((res) => {
          console.log(res);
          this.$router.push('/list/' + res.data.id);
        })
        .catch((error) => {
          console.error(error);
        });
      }

    },
    getList() {
      const path = "http://localhost:4000/list/" + this.$route.params.id;
      axios.get(path, {
        responseType: 'json'
      })
      .then((res) => {
        console.log(res);
        this.list.title = res.data[0].title;
        this.list.items = res.data[1];
      })
      .catch((error) => {
        console.error(error);
      });
    },
    addItem() {
      console.log(this.list.items);
      let curr_list = this.list.items;
      curr_list.push({
        description: "New Thing"
      });
      this.list.items = curr_list;
    }
  },
  created() {
    if (!this.$props.creatingList) {
      this.getList();
    }
  },
  mounted() {
    feather.replace();
  }
};
</script>

<style>
.feather-16{
    width: 1rem;
    height: 1rem;
}
</style>
