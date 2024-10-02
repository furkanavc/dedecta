<script setup lang="ts">
import { dataStore } from "~/store/data";
onMounted(() => {
  // dataStore().combineData();
});
</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
