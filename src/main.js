import Vue from 'vue';
import Buefy from 'buefy';
import VueAnalytics from 'vue-analytics';
import VueScrollTo from 'vue-scrollto';
import VeeValidate, { Validator } from 'vee-validate';
import ja from 'vee-validate/dist/locale/ja';
import App from './App.vue';
import './assets/scss/app.scss';
import router from './router';
import store from './store/store';
import './registerServiceWorker';

if (process.env.VUE_APP_GA_TRACKING_ID) {
  Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GA_TRACKING_ID,
    router,
  });
}

Vue.use(Buefy);
Vue.use(VueScrollTo);
Validator.localize('ja', ja);
Vue.use(VeeValidate, { locale: 'ja' });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
