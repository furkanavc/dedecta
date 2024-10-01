<script setup lang="ts">
import { dataStore } from "~/store/data";
import { storeToRefs } from "#imports";
const { insta, x, combinedData } = storeToRefs(dataStore());

const data = [
  {
    user: "MrBeast",
    text: "It’s my 26th birthday, so I am giving away 26 Teslas to my followers! Like and Comment on this post tagging 2 friends to enter! Make sure you’re FOLLOWING so I can dm you if you win a Tesla! Winners will be announced in 7 days, share this to your story and help your friends win a Tesla lol\n\nTerms and conditions apply, see official rules: http://Bit.ly/beastgaway",
    like: 14880744,
    comment: 10183821,
    date: 1715123731,
    avatar:
      "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_normal.jpg",
    platform: "Instagram",
  },
  {
    user: "MrBeast",
    text: "To celebrate my 26th birthday, I’m giving away 26 brand new Teslas! Tag 2 friends in the comments and make sure you're following me to enter! Winners will be announced in a week!",
    like: 14850000,
    comment: 10000000,
    date: "Thu Jul 25 02:28:41 +0000 2024",
    avatar:
      "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_normal.jpg",
    platform: "X",
  },
  {
    user: "MrBeast",
    text: "It’s my birthday, and I want to give back! Win 26 Teslas by liking and commenting on this post! Don’t forget to tag 2 friends and follow me for a chance to win!",
    like: 14900000,
    comment: 10200000,
    date: "Thu Jul 25 02:28:41 +0000 2024",
    avatar:
      "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-19/31077884_211593632905749_1394765701385814016_n.jpg?stp=dst-jpg_e0_s150x150&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=yA5upC6eyGwQ7kNvgGZ1oD7&_nc_gid=611b92f67a7f45aab430c49f203a0a12&edm=AJgCAUABAAAA&ccb=7-5&oh=00_AYCHEwT2k7EUI-A4A44gg7StbG_grKkJrZbfG5JuadMeig&oe=670192CF&_nc_sid=f93d1f",
    platform: "X",
  },
  {
    user: "MrBeast",
    text: "26 Teslas are up for grabs for my 26th birthday! Like, comment with 2 friends tagged, and make sure you follow me to enter! Winners revealed in 7 days!",
    like: 14890000,
    comment: 10050000,
    date: 1715123734,
    retweets: 45646546,
    avatar:
      "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_normal.jpg",
    platform: "X",
  },
  {
    user: "MrBeast",
    text: "Help me celebrate my 26th birthday! I’m giving away 26 Teslas! Like this post and tag 2 friends to enter. Follow me to stay updated on the winners!",
    like: 14950000,
    comment: 10300000,
    date: 1715123735,
    retweets: 56464,
    avatar:
      "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_normal.jpg",
    platform: "X",
  },
];
</script>
<template>
  <div class="grid grid-cols-1 gap-5 px-5">
    <PostItem v-for="(post, i) in data" :key="i" :post="post" />
  </div>
</template>
