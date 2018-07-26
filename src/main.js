import Vue from 'vue';
import Antd from 'vue-antd-ui';
import 'vue-antd-ui/dist/antd.css';
import App from './App.vue';
import router from './router/router';
import store from './store/store';

Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
