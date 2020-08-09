import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Toasted from 'vue-toasted';
import * as firebase from 'firebase/app';

require("firebase/auth");
require("firebase/firestore");
require("firebase/analytics");


Vue.use(Toasted);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyApUFCDTCbi8sAtMNuHTl0EnHS0maZbIyY",
  authDomain: "personal-website-3c67f.firebaseapp.com",
  databaseURL: "https://personal-website-3c67f.firebaseio.com",
  projectId: "personal-website-3c67f",
  storageBucket: "personal-website-3c67f.appspot.com",
  messagingSenderId: "809835501134",
  appId: "1:809835501134:web:e20299e384e3b9a891951f",
  measurementId: "G-R1B6RPVW4Q"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
