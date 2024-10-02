import { defineStore } from "pinia";
import type {
  CombinedData,
  XPost,
  InstagramPost,
  ChartData,
} from "~/types/index";

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
      dummy: [
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
      ],
      searchedXData: [],
      showedData: [] as CombinedData[],
      chartData: {
        dates: [],
        x: {
          likes: [],
        },
        insta: {
          likes: [],
        },
      } as ChartData,
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
      this.insta.posts.forEach((post: InstagramPost) => {
        this.combinedData.push({
          user: post.caption?.user?.full_name || "Unknown User",
          text: post.caption?.text || "",
          like: post.like_count || 0,
          comment: post.comment_count || 0,
          date: post.caption?.created_at || new Date().toISOString(),
          avatar: post.caption?.user?.profile_pic_url || "",
          platform: "Instagram",
        });
      });
      this.x.posts.forEach((post: XPost) => {
        this.combinedData.push({
          user: post.author?.name || "Unknown User",
          text: post.text || "",
          like: post.favorites || 0,
          comment: post.replies || 0,
          date: post.created_at || new Date().toISOString(),
          retweets: post.retweets || 0,
          avatar: post.author?.avatar || "",
          platform: "X",
        });
      });
      this.showedData = this.combinedData;
      this.fillChartData();
    },
    sortData(sortBy: string) {
      let sortedData = [...this.showedData];

      switch (sortBy) {
        case "dateAsc":
          sortedData.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          );
          break;
        case "dateDesc":
          sortedData.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          break;
        case "likesAsc":
          sortedData.sort((a, b) => a.like - b.like);
          break;
        case "likesDesc":
          sortedData.sort((a, b) => b.like - a.like);
          break;
        case "commentsAsc":
          sortedData.sort((a, b) => a.comment - b.comment);
          break;
        case "commentsDesc":
          sortedData.sort((a, b) => b.comment - a.comment);
          break;
        case "retweetsAsc":
          sortedData.sort((a, b) => (a.retweets || 0) - (b.retweets || 0));
          break;
        case "retweetsDesc":
          sortedData.sort((a, b) => (b.retweets || 0) - (a.retweets || 0));
          break;
        default:
          return [];
      }

      return (this.showedData = sortedData);
    },
    searchData(query: string) {
      if (!this.combinedData || !Array.isArray(this.combinedData)) {
        console.error("Data is not available.");
        return [];
      }

      if (!query) {
        this.showedData = this.combinedData;
      } else {
        const filteredData = this.combinedData.filter(
          (post: CombinedData) =>
            post.text && post.text.toLowerCase().includes(query.toLowerCase())
        );
        return (this.showedData = filteredData);
      }
    },
    filterByDate(startTimestamp: number, endTimestamp: number) {
      if (!this.combinedData || !Array.isArray(this.combinedData)) {
        console.error("Data is not available.");
        return [];
      }

      const filteredData = this.combinedData.filter((post: CombinedData) => {
        let postTimestamp: number;
        if (typeof post.date === "number") {
          postTimestamp = post.date * 1000;
        } else {
          postTimestamp = new Date(post.date).getTime();
        }

        return postTimestamp >= startTimestamp && postTimestamp <= endTimestamp;
      });

      return (this.showedData = filteredData);
    },
    fillChartData() {
      this.chartData.dates = [];
      this.chartData.x.likes = [];
      this.chartData.insta.likes = [];

      this.combinedData.forEach((post: CombinedData) => {
        const date = new Date(
          typeof post.date === "number" ? post.date * 1000 : post.date
        ).toLocaleDateString();

        this.chartData.dates.push(date);

        if (post.platform === "X") {
          this.chartData.x.likes.push(post.like.toString());
        } else if (post.platform === "Instagram") {
          this.chartData.insta.likes.push(post.like.toString());
        }
      });
    },
    async twitterSearch(query: string) {
      const encodedQuery = encodeURIComponent(query);
      const url = `https://twitter-api45.p.rapidapi.com/search.php?query=${encodedQuery}&search_type=Top`;
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
        this.searchedXData = result.timeline;
      } catch (error) {
        console.error(error);
      }
    },
    clearDate() {
      return (this.showedData = this.combinedData);
    },
  },
});
