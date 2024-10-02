<script setup lang="ts"></script>
<template>
  <div class="flex flex-col lg:flex-row container">
    <div
      class="w-full lg:w-1/4 border-b-2 lg:border-b-0 lg:border-r-2 border-slate-700 p-5"
    >
      <Nav />
    </div>
    <slot class="w-full lg:w-3/4" />
  </div>
</template>
