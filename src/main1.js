import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App3 from './App3.vue';

// import HelloWorld from './components/HelloWorld.vue';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App3),
}).$mount('#app3');

