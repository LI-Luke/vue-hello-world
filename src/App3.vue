<template>
    <div id="hw2">
        <my-select v-model="nameIndex" :data-source="names"></my-select>
        <my-select v-model="areaIndex" :data-source="areas"></my-select>
        {{zip}}
    </div>
</template>
<script>
import MySelect from './components/HW2/MySelect.vue';

const cities = [
  {
    name: '基隆市',
    areas: [
      { name: '仁愛區', zip: '200' },
      { name: '信義區', zip: '201' },
      { name: '中正區', zip: '202' },
      { name: '中山區', zip: '203' },
      { name: '安樂區', zip: '204' },
      { name: '暖暖區', zip: '205' },
      { name: '七堵區', zip: '206' },
    ],
  },
  {
    name: '台北市',
    areas: [
      { name: '中正區', zip: '300' },
      { name: '大同區', zip: '301' },
      { name: '中山區', zip: '302' },
      { name: '松山區', zip: '303' },
      { name: '大安區', zip: '304' },
      { name: '萬華區', zip: '305' },
      { name: '信義區', zip: '306' },
      { name: '士林區', zip: '307' },
      { name: '北投區', zip: '308' },
      { name: '內湖區', zip: '309' },
      { name: '南港區', zip: '310' },
      { name: '文山區', zip: '311' },
    ],
  },
  {
    name: '新竹市',
    areas: [
      { name: '新竹市', zip: '400' },
    ],
  },
];
export default {
  name: 'App3',
  components: {
    MySelect,
  },
  data() {
    return {
      nameIndex: 0,
      areaIndex: 0,
    };
  },
  computed: {
    names() {
      return cities;
    },
    areas() {
      return cities[this.nameIndex].areas;
    },
    zip() {
      //  console.log(this.areas[this.areaIndex]);
      return this.areas[this.areaIndex].zip;
    },
  },
  watch: {
    nameIndex() {
      this.areaIndex = 0;
    },
  },
};
</script>

