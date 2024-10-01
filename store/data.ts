import { defineStore } from "pinia";

export const dataStore = defineStore("dataStore", {
  state: () => {
    return {
      insta: {
        posts: [],
        user: [],
      },
      x: {
        posts: [],
        user: [],
      },
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
        this.insta.user = result.data.user;
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
        this.x.user = result.user;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
