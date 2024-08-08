<script setup lang="ts">
import { ref } from 'vue';
import RealGrid from "../components/RealGrid.vue";

const fields = ref([
  { fieldName: "name", dataType: "text" },
  { fieldName: "age", dataType: "text" },
  { fieldName: "country", dataType: "text", }
]);

const columns = ref([
  { name: "name", fieldName: "name", type: "data", width: "100", header: { text: "Name" } },
  { name: "age", fieldName: "age", type: "data", width: "100", header: { text: "Age" } },
  { name: "country", fieldName: "country", type: "data", width: "100", header: { text: "Country" } }
]);

const data = ref([
  { name: "John Doe", age: 28, country: "USA" },
  { name: "Jane Smith", age: 32, country: "UK" },
  { name: "Juan Carlos", age: 25, country: "Spain" },
  { name: "Juan Carlos", age: 25, country: "Spain" },
]);
</script>

<template>
  <div class="box">
    <RealGrid :fields="fields" :columns="columns" :data="data"/>
  </div>
</template>

<style scoped>
.box {
  width: 500px;
  height: 500px;
  padding: 5px;

}
</style>