<script setup lang="ts">
import { dataStore } from "~/store/data";
import { storeToRefs } from "#imports";

const { searchedXData } = storeToRefs(dataStore());
</script>
<template>
  <div class="grid grid-cols-1 gap-5 w-full">
    <span class="text-lg text-white"
      ># @ kullanarak veya kelime araması yapabilirsiniz.
    </span>
    <div
      v-if="searchedXData.length === 0"
      class="w-full h-96 flex items-center justify-center"
    >
      <Icon name="eos-icons:loading" size="48" class="text-white" />
    </div>
    <div v-else v-for="(post, i) in searchedXData">
      <TwitterCard :tweet="post" />
    </div>
  </div>
</template>
