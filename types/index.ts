type CombinedData = {
  user: string;
  text: string;
  like: number;
  comment: number;
  date: string | number;
  retweets?: number;
  avatar: string;
  platform: string;
};

export type { CombinedData };
