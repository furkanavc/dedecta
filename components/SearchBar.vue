<script setup lang="ts">
import { dataStore } from "~/store/data";

const sortOrder = ref("Sort By");
const sort = () => {
  dataStore().sortData(sortOrder.value);
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
  <div class="bg-white p-5 rounded-lg text-lg">
    <h2 class="mb-2">Filter & Sort</h2>
    SEARCH
  </div>
</template>
