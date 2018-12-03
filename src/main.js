import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import App from './App.vue';
import App2 from './App2.vue';
import App3 from './App3.vue';

// import HelloWorld from './components/HelloWorld.vue';

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

