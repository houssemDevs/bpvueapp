import App from '@/app.vue';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';

import store from '@/store';
import './index.scss';

Vue.use(BootstrapVue);

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app',
  render: h => h(App),
  store,
});
