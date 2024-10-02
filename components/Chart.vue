<script setup lang="ts">
import { dataStore } from "~/store/data";
import { storeToRefs } from "#imports";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LinearScale,
  CategoryScale
);
const { combinedData } = storeToRefs(dataStore());
interface ChartData {
  dates: string[];
  x: {
    likes: string[];
  };
  insta: {
    likes: string[];
  };
}
const chartData = ref<ChartData>({
  dates: [],
  x: {
    likes: [],
  },
  insta: {
    likes: [],
  },
});
const fillChartData = () => {
  chartData.value.dates = [];
  chartData.value.x.likes = [];
  chartData.value.insta.likes = [];

  combinedData.value.forEach((post) => {
    const date = new Date(
      typeof post.date === "number" ? post.date * 1000 : post.date
    ).toLocaleDateString();

    chartData.value.dates.push(date);

    if (post.platform === "X") {
      chartData.value.x.likes.push(post.like.toString());
    } else if (post.platform === "Instagram") {
      chartData.value.insta.likes.push(post.like.toString());
    }
  });
};

const chartDataObj: any = computed(() => ({
  labels: chartData.value.dates,
  datasets: [
    {
      label: "Instagram",
      data: chartData.value.insta.likes,
      backgroundColor: "#C13584",
    },
    {
      label: "X",
      data: chartData.value.x.likes,
      backgroundColor: "#1DA1F2",
    },
  ],
}));
const options = {
  responsive: true,
};
const styles = computed(() => {
  return {
    position: "relative",
    height: "500px",
    width: "100%",
  };
});
onMounted(() => {
  fillChartData();
});
</script>
<template>
  <div class="flex">
    <div
      v-if="chartDataObj.labels.length === 0"
      class="w-full h-96 flex items-center justify-center"
    >
      <Icon name="eos-icons:loading" size="48" class="text-white" />
    </div>
    <Bar v-else :data="chartDataObj" :options="options" :style="styles" />
  </div>
</template>
