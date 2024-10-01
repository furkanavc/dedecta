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
    <div class="flex flex-col border-l-2 border-l-slate-700 p-5">
      <div class="bg-white p-5 rounded-lg">
        <SortBar />
        <FilterBar />
      </div>
    </div>
  </div>
</template>
