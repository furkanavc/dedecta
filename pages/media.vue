<script setup lang="ts">
import { dataStore } from "~/store/data";

onMounted(() => {
  // dataStore().combineData();
});
definePageMeta({
  layout: "dashboard",
});
</script>
<template>
  <div class="flex">
    <PostList />
    <div class="flex space-x-3 border-l-2 border-l-slate-700 p-5">
      <FilterBar />
      <SearchBar />
    </div>
  </div>
</template>
