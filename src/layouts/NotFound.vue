<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div>
      <button text-sm btn m="3 t8" @click="router.back()">
        {{ ('button.back') }}
      </button>
    </div>
  </main>
</template>
