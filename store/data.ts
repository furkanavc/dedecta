import { defineStore } from "pinia";
import type { CombinedData } from "~/types/index";

export const dataStore = defineStore("dataStore", {
  state: () => {
    return {
      insta: {
        posts: [],
      },
      x: {
        posts: [],
      },
      combinedData: [] as CombinedData[],
    };
  },
  actions: {
    async fetchInstaData() {
      const url =
        "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=mrbeast";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "a4732e5793mshc442dddd3732853p15a39fjsncb230a7d32b5",
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        this.insta.posts = result.data.items;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchXData() {
      const url =
        "https://twitter-api45.p.rapidapi.com/timeline.php?screenname=mrbeast";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "a4732e5793mshc442dddd3732853p15a39fjsncb230a7d32b5",
          "x-rapidapi-host": "twitter-api45.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        this.x.posts = result.timeline;
      } catch (error) {
        console.error(error);
      }
    },
    async combineData() {
      await dataStore().fetchInstaData();
      await dataStore().fetchXData();
      this.insta.posts.forEach((post) => {
        this.combinedData.push({
          user: post.caption.user.full_name,
          text: post.caption.text,
          like: post.like_count,
          comment: post.comment_count,
          date: post.caption.created_at,
          avatar: post.caption.user.profile_pic_url,
          image: post.image_version.items[1].url,
          platform: "Instagram",
        });
      });
      this.x.posts.forEach((post) => {
        this.combinedData.push({
          user: post.author?.name,
          text: post.text,
          like: post.favorites,
          comment: post.replies,
          date: post.created_at,
          retweets: post.retweets,
          avatar: post.author?.avatar,
          image: post.media.photo[0].media_url_https ?? "",
          platform: "X",
        });
      });
    },
  },
});
