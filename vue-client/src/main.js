// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import App from './App';
import router from './router';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee, faCheck, faList, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//library.add(faCoffee);
//library.add(faCheck);
//library.add(faList);
//library.add(faPlusCircle);

// Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
