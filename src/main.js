import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import App2 from './App2.vue';
import App3 from './App3.vue';
import App4 from './App4.vue';
import App5 from './App5.vue';
// import HelloWorld from './components/HelloWorld.vue';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
}).$mount('#app');

new Vue({
  render: h => h(App2),
}).$mount('#app2');

new Vue({
  render: h => h(App3),
}).$mount('#app3');

new Vue({
  render: h => h(App4),
}).$mount('#app4');

new Vue({
  render: h => h(App5),
}).$mount('#app4');

