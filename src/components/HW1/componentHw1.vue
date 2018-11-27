<template>
  <div class="abc">
    <input type="text" v-model="message" v-on:keyup.13="addItem">
    <button type="button" @click="addItem">Add</button>
    <div v-for="(item, index) in items" :key="index" @click="removeItem(index)">
      {{item}}
    </div>
    <pre>{{items}}</pre>
  </div>
</template>

<script>
export default {
  name: 'componentHw1',
  data() {
    return {
      items: [
        'one', 'two', 'three',
      ],
      message: '',
    };
  },
  methods: {
    addItem() {
      if (this.message === '') {
        return;
      }
      this.items.push(this.message);
      this.message = '';
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
};

</script>
<style scoped>
.abc {
  margin: auto;
  text-align: center;
  width: 300px;
}
pre {
  text-align: left;
  background-color: #efeaea;
  border: 1px solid #b6b6ca;
  font-size: 24px;
}
.abc div {
  text-align: left;
  font-size: 24px;
}
</style>

