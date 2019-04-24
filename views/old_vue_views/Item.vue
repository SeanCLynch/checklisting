<template>
  <div class="mx-auto rounded-sm overflow-hidden">
    <div class="flex flex-row bg-grey-lighter">
      <div class="text-grey-darker bg-grey-light px-1 pt-1 rounded mr-1 self-center">
      	<i data-feather="check-square"></i>
      </div>

      <div class="flex-grow text-grey-darker mr-2">
      	<input type="text" v-model="checklist_item.content" class="bg-grey-light appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple">
      </div>


      <!--
      <div class="text-grey-darker bg-grey-light px-4 py-2 m-2">
      	Extra
      </div>
      -->
    </div>
  </div>
</template>

<script>
import '@/assets/feather.min.js';

export default {
  name: 'Item',
  props: ['checklist_item'],
  mounted() {
    feather.replace();
  }
}
</script>

<style>

</style>
