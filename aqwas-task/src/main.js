import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGeolocation from 'vue-browser-geolocation';
import axios from 'axios'
import VueAxios from 'vue-axios'



Vue.use(VueGeolocation);
Vue.use(VueAxios, axios)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyADOhM0y24lsM5TrKLgaysY_J37z9rOVZA',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
  installComponents: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


