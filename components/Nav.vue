<script setup lang="ts">
import { Nav } from "~/utils/constants/nav";
</script>
<template>
  <nav class="flex flex-col space-y-2 bg-white rounded-lg p-5">
    <NuxtLink
      v-for="item in Nav"
      :to="item.path"
      :key="item.name"
      class="flex items-center space-x-2 text-lg hover:bg-slate-400 duration-300 rounded-lg w-full p-2"
    >
      <div class="size-8 flex items-center justify-center">
        <Icon :name="item.icon" size="24" />
      </div>
      <span>
        {{ item.name }}
      </span>
    </NuxtLink>
  </nav>
</template>
