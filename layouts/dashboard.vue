<script setup lang="ts"></script>
<template>
  <div class="flex container">
    <div class="w-1/4 border-r-2 border-r-slate-700 p-5">
      <Nav />
    </div>
    <slot class="w-3/4" />
  </div>
</template>
