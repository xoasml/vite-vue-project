<template>
  <div class="box">
    <div class="buttons">
      <button @click="addTab('Menu 1', MenuOne)">Menu 1</button>
      <button @click="addTab('Menu 2', MenuTwo)">Menu 2</button>
      <button @click="addTab('Menu 3', MenuThree)">Menu 3</button>
    </div>
    <div class="tabs" v-if="tabs.length > 0">
      <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: activeTab === index }"
          @click="activeTab = index"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tab-content" v-if="tabs.length > 0">
      <div v-for="(tab, index) in tabs" :key="index">
        <component v-if="activeTab === index" :is="tab.content" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import MenuOne from "../views/MenuOne.vue"
import MenuTwo from "../views/MenuTwo.vue"
import MenuThree from "../views/MenuThree.vue"

const tabs = ref([]);
const activeTab = ref(0);

const addTab = (label, content) => {
  const existingTabIndex = tabs.value.findIndex(tab => tab.label === label);

  if (existingTabIndex !== -1) {
    activeTab.value = existingTabIndex;
  } else {
    tabs.value.push({label, content});
    activeTab.value = tabs.value.length - 1;
  }
};
</script>

<style scoped>

.box {
  background-color: #7f8ca5;
}

.buttons {
  margin-bottom: 20px;
}

.tabs {
  display: flex;
  margin-bottom: 10px;
}

button {
  padding: 10px;
  cursor: pointer;
  margin-right: 5px;
}

button.active {
  font-weight: bold;
}

.tab-content {
  margin-top: 20px;
}
</style>