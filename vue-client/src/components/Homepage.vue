<template>
 <div>

  <navbar></navbar>

    <div class="container-fluid">
      <div class="row">

        <sidebar></sidebar>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
          </div>
          
        </main>

      </div>
    </div>
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
