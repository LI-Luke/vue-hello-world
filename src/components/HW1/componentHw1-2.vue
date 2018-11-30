<template>
  <div class="form-group mx-sm-3 mb-2">
    <input type="text" v-model="message" >
    <button  class="btn btn-primary"   type="button"  @click="add"> 增加 </button>
    <li v-for="(item, index) in list" :key="index"  @click="remove(index)" >{{ item }}</li>
  </div>
</template>

<script>

export default {
  name: 'componentHw1-2',
  data() {
    return {
      list: [
        'one', 'two', 'three',
      ],
      message: '',
    };
  },
  methods: {
    add() {
      if (this.message === '') {
        return;
      }
      this.list.push(this.message);
      this.message = '';
    },
    remove(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>
<style>
</style>
