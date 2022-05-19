import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ButtonBlock from './components/ButtonBlock';
import GridBlock from './components/GridBlock'

import RowBlock from './components/RowBlock'
import TextBlock from './components/TextBlock'


Vue.config.productionTip = false

var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.component('button-block',ButtonBlock);


