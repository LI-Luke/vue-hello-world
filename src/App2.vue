<template>
    <div id="hw1-2">
        <h1>HW1</h1>
        <component-hw1></component-hw1>
        <b-btn variant="primary" href="https://bootstrap-vue.js.org/">More Info</b-btn>
    </div>
</template>
<script lang="ts">
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import componentHw1 from './components/HW1/componentHw1-2.vue';
/*
export default Vue.extend({
  el: '#hw1',
  components: { componentHw1 },
});
*/
export default {
  name: 'app2',
  components: {
    componentHw1,
  },
};
</script>

