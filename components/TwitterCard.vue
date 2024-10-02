<script setup lang="ts">
import { toHumanDate } from "~/utils/helpers";
interface Props {
  tweet?: {
    text: string;
    created_at: string;
    screen_name: string;
  };
}

const { tweet } = defineProps<Props>();
</script>
<template>
  <div class="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
    <div class="flex justify-between items-center">
      <span v-if="tweet?.created_at" class="font-light text-gray-600">{{
        toHumanDate(tweet?.created_at)
      }}</span>

      <h1 class="text-gray-700 font-bold">{{ tweet?.screen_name }}</h1>
    </div>
    <div class="mt-2">
      <p class="mt-2 text-gray-600">
        {{ tweet?.text }}
      </p>
    </div>
  </div>
</template>
