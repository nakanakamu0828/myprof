import Vue from 'vue';
import Buefy from 'buefy';
import VueAnalytics from 'vue-analytics';
import App from './App.vue';
import './assets/scss/app.scss';
import router from './router';
import store from './store';


Vue.use(VueAnalytics, {
  id: 'UA-113488529-4',
  router,
});

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
