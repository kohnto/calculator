import Vue from 'vue';
import App from './App.vue';

import CalcButton from './components/CalcButton';
import CalcGrid from './components/CalcGrid'

import CalcRow from './components/CalcRow'
import CalcText from './components/CalcText'
import CalcElement from './components/CalcElement'


Vue.config.productionTip = false

var vm = new Vue({
  render: h => h(App)
}).$mount('#app')

Vue.component('calc-button',CalcButton);
Vue.component('calc-grid',CalcGrid);
Vue.component('calc-row',CalcRow);
Vue.component('calc-text',CalcText);
Vue.component('calc-element',CalcElement);


