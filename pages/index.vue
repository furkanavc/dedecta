<script setup lang="ts">
import { dataStore } from "~/store/data";
import { storeToRefs } from "#imports";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: ["January", "February", "March"],
  datasets: [{ data: [40, 20, 12] }],
};
const options = {
  responsive: true,
};
const styles = computed(() => {
  return {
    position: "relative",
    height: "500px",
    maxWidth: "512px",
  };
});
const { insta, x, combinedData } = storeToRefs(dataStore());

definePageMeta({
  layout: "dashboard",
});
</script>
<template>
  <div class="flex px-5">
    <Bar :data="data" :options="options" :style="styles" />
    <div class="border-l-2 border-l-slate-700"></div>
  </div>
</template>
