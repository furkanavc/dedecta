<script setup lang="ts">
import { dataStore } from "~/store/data";
import { storeToRefs } from "#imports";
const { insta, x, combinedData } = storeToRefs(dataStore());
onMounted(() => {
  // dataStore().combineData();
});
definePageMeta({
  layout: "dashboard",
});
</script>
<template>
  <div class="flex flex-col w-full justify-center items-center">
    <div class="flex space-x-3 items-center">
      <FilterBar />
      <SearchBar />
    </div>
    <PostList />
  </div>
</template>
