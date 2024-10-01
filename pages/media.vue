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
  <div class="flex w-full">
    <PostList class="w-2/3" />
    <div class="flex flex-col border-l-2 border-l-slate-700 p-5 gap-5 w-1/3">
      <SearchBar />
      <FilterBar />
    </div>
  </div>
</template>
