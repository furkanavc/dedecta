<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>
<template>
  <div class="flex flex-col-reverse lg:flex-row w-full">
    <div class="w-full lg:w-2/3 p-5">
      <SearchedX />
    </div>
    <div
      class="flex flex-col border-b-2 lg:border-b-0 lg:border-l-2 border-slate-700 p-5 gap-5 w-full lg:w-1/3"
    >
      <SearchBar :x-search="true" />
    </div>
  </div>
</template>
