<script setup lang="ts">
import { dataStore } from "~/store/data";
import { storeToRefs } from "#imports";
const { insta, x } = storeToRefs(dataStore());
onMounted(() => {
  // dataStore().fetchInstaData();
  // dataStore().fetchXData();
});
definePageMeta({
  layout: "dashboard",
});
</script>
<template>
  <div>
    <pre>{{ x.posts }}</pre>
    <pre>{{ x.user }}</pre>
  </div>
</template>
