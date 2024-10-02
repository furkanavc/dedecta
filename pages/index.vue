<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>
<template>
  <div class="flex w-full">
    <div class="w-2/3 p-5">
      <Chart />
    </div>
    <div class="border-l-2 border-l-slate-700 p-5 w-1/3"></div>
  </div>
</template>
