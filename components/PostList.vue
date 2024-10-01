<script setup lang="ts">
import { dataStore } from "~/store/data";
import { storeToRefs } from "#imports";
const { insta, x, combinedData, dummy } = storeToRefs(dataStore());
</script>
<template>
  <div class="grid grid-cols-1 gap-5 p-5">
    <PostItem v-for="(post, i) in dummy" :key="i" :post="post" />
  </div>
</template>
