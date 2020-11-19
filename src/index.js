// если не нужно компилирование чего-то - убираем)
// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
import './assets/css/main.css'

// Vue.js
import Vue from 'vue'
// window.Vue = Vue
import Vuelidate from 'vuelidate'

// Plugins
Vue.use(Vuelidate)
import store from './store'

Vue.config.productionTip = false

// Vue components (for use in html)
// Vue.component('modal-component', require('./js/components/Modal.vue').default)
//ui
Vue.component('notify-component', require('./js/components/UI/Notify.vue').default)
//controls
Vue.component('login-button', require('./js/components/UI/controls/buttons/Login.vue').default)

// Vue init
const app = new Vue({
  data() {
    return {
      modalView: false,
      exampleView: false
    }
  },
  store,
  el: '#app'
})
