<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Dashboard <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>

      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>My Checklists</span>
        <a class="d-flex align-items-center text-muted" href="#">
        <font-awesome-icon icon="plus-circle" />
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li v-for="list in lists">
          <a class="nav-link" @click="directToList(list.id)">
            <font-awesome-icon icon="check" />
            {{ list.title }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Sidebar',
  data() {
    return {
      lists: []
    };
  },
  methods: {
    directToList(listId) {
	this.$router.push({
	    path: '/list/' + listId
	});
    },
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

<style>

.sidebar {
  font-size: 0.875rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}
</style>
