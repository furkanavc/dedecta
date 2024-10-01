<script setup lang="ts">
const sortOrder = ref("all");
import { dataStore } from "~/store/data";

const { dummy } = storeToRefs(dataStore());

const sort = () => {
  dataStore().sortData(sortOrder.value);
  console.log("object :>> ", dummy.value);
};
</script>
<template>
  <select v-model="sortOrder" @change="sort">
    <option value="clear">Clear</option>
    <option value="retweetsAsc">Retweets (Ascending)</option>
    <option value="retweetsDesc">Retweets (Descending)</option>
    <option value="dateAsc">Date (Ascending)</option>
    <option value="dateDesc">Date (Descending)</option>
    <option value="likesAsc">Likes (Ascending)</option>
    <option value="likesDesc">Likes (Descending)</option>
    <option value="commentsDesc">Comments (Ascending)</option>
    <option value="commentsDesc">Comments (Descending)</option>
  </select>
</template>
