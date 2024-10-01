import { defineStore } from "pinia";

export const dataStore = defineStore("dataStore", {
  state: () => {
    return {
      insta: {
        posts: [],
        user: [],
      },
      user: [],
    };
  },
  actions: {
    async fetchData() {
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
        const data = await response.json();
        this.insta.posts = data.data.items;
        this.insta.user = data.data.user;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
