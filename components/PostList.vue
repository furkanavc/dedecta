<script setup lang="ts">
import { dataStore } from "~/store/data";
import { storeToRefs } from "#imports";
const { insta, x, combinedData, dummy, showedData } = storeToRefs(dataStore());
</script>
<template>
  <div class="grid grid-cols-1 gap-5 w-full">
    <div
      v-if="showedData.length === 0"
      class="w-full h-96 flex items-center justify-center"
    >
      <Icon name="eos-icons:loading" size="48" class="text-white" />
    </div>
    <PostItem
      v-else
      v-for="(post, i) in showedData"
      :key="post.text"
      :post="post"
    />
  </div>
</template>
