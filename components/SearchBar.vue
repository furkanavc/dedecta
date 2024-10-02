<script setup lang="ts">
import { dataStore } from "~/store/data";
import { debounceFunction } from "~/utils/helpers";
const searchQuery = ref("");

const search = async () => {
  await dataStore().searchData(searchQuery.value);
};
const debouncedSearch = debounceFunction(search, 1000);
</script>
<template>
  <div class="bg-white p-5 rounded-lg text-lg w-full">
    <h2 class="mb-2">Search</h2>
    <input
      type="text"
      v-model="searchQuery"
      @input="debouncedSearch"
      class="w-full h-12 border border-slate-700 rounded-lg px-3"
    />
  </div>
</template>
