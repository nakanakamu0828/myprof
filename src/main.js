import Vue from 'vue';
import Buefy from 'buefy';
import VueAnalytics from 'vue-analytics';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import './assets/scss/app.scss';
import router from './router';
import store from './store';
import './registerServiceWorker';

if (process.env.VUE_APP_GA_TRACKING_ID) {
  Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GA_TRACKING_ID,
    router,
  });
}

Vue.use(Buefy);
Vue.use(VueScrollTo);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
