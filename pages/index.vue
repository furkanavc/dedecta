<script setup lang="ts">
import { dataStore } from "~/store/data";
import { storeToRefs } from "#imports";
const { insta } = storeToRefs(dataStore());
onMounted(() => {
  // dataStore().fetchData();
});
definePageMeta({
  layout: "dashboard",
});
</script>
<template>
  <div>
    <pre>{{ insta.posts }}</pre>
    <pre>{{ insta.user }}</pre>
  </div>
</template>
