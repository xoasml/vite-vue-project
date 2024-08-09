<script setup lang="ts">
import {onMounted, defineProps} from 'vue';
import RealGrid from "./RealGrid.vue";

interface IField {
  fieldName: string;
  dataType: string;
}

interface IColumn {
  name: string;
  fieldName: string;
  type: string;
  width: string;
  header: { text: string };
}

interface IData {
  name: string;
  age: number;
  country: string;
}

interface IRealGrid {
  fields: IField[];
  columns: IColumn[];
  data: IData[];
}

const props = defineProps<IRealGrid>();

onMounted(() => {

  const container = document.getElementById('realgrid');
  const provider = new RealGrid.LocalDataProvider(false);
  const gridView = new RealGrid.GridView(container);
  gridView.setDataSource(provider);

  // 필드 생성
  provider.setFields(
      props.fields
  );

  // 컬럼 생성(그리드에 디자인)
  gridView.setColumns(
      props.columns
  );

  provider.fillJsonData(props.data, { fillMode: "set" });

  // gridView.setOptions({
  // });
});
</script>
<template>
  <div id="realgrid" style="width: 100%; height: 100%;"></div>
</template>
