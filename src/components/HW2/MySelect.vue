<template>
    <select v-model="selectedIndex">
        <option v-for="(item, index) in dataSource" :key="index" :value="index">
            {{item.name}}
        </option>
    </select>
</template>

<script>


export default {
  name: 'MySelect',
  props: [
    'value',
    'dataSource',
  ],
  computed: {
    selectedIndex: {
      get() {
        // console.log(this.value);
        return this.value;
      },
      set(val) {
        // console.log(val);
        this.$emit('input', val);
      },
    },
  },
};
</script>
