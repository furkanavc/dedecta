<script setup lang="ts">
import { dataStore } from "~/store/data";

const sortOrder = ref("Sort By");
const startDate = ref("");
const endDate = ref("");

const sort = () => {
  dataStore().sortData(sortOrder.value);
};
const filter = () => {
  if (!startDate.value || !endDate.value) {
    alert("Please select start and end dates");
    return;
  }

  const startTimestamp = new Date(startDate.value).getTime();
  const endTimestamp = new Date(endDate.value).getTime();
  dataStore().filterByDate(startTimestamp, endTimestamp);
};
const clearDate = () => {
  startDate.value = "";
  endDate.value = "";
  sortOrder.value = "Sort By";

  dataStore().clearDate();
};
const sortOptions = [
  {
    name: "Likes (Ascending)",
    value: "likesAsc",
  },
  {
    name: "Likes (Descending)",
    value: "likesDesc",
  },
  {
    name: "Comments (Ascending)",
    value: "commentsAsc",
  },
  {
    name: "Comments (Descending)",
    value: "commentsDesc",
  },
  {
    name: "Retweets (Ascending)",
    value: "retweetsAsc",
  },
  {
    name: "Retweets (Descending)",
    value: "retweetsDesc",
  },
  {
    name: "Date (Ascending)",
    value: "dateAsc",
  },
  {
    name: "Date (Descending)",
    value: "dateDesc",
  },
];
</script>
<template>
  <div class="bg-white p-5 rounded-lg text-lg space-y-2">
    <h2>Filter & Sort</h2>

    <select
      v-model="sortOrder"
      @change="sort"
      class="w-full rounded-lg border border-slate-700 h-12"
    >
      <option disabled selected>Sort By</option>
      <option
        v-for="option in sortOptions"
        :key="option.name"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
    <div class="border border-slate-700 p-2 rounded-lg">
      <div>
        <label for="start-date">Start Date:</label>
        <input type="date" id="start-date" v-model="startDate" class="w-full" />
      </div>
      <div>
        <label for="end-date">End Date:</label>
        <input type="date" id="end-date" v-model="endDate" class="w-full" />
      </div>
      <button
        @click="filter"
        class="bg-slate-700 text-white w-full p-1 rounded-lg mt-2"
      >
        Filter by date
      </button>
      <button
        @click="clearDate"
        class="bg-slate-700 text-white w-full p-1 rounded-lg mt-2"
      >
        Clear
      </button>
    </div>
  </div>
</template>
