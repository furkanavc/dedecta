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

type InstagramPost = {
  caption?: {
    user?: {
      full_name?: string;
      profile_pic_url?: string;
    };
    text?: string;
    created_at?: string;
  };
  like_count?: number;
  comment_count?: number;
};

type XPost = {
  author?: {
    name?: string;
    avatar?: string;
  };
  text?: string;
  favorites?: number;
  replies?: number;
  created_at?: string;
  retweets?: number;
};

type ChartData = {
  dates: string[];
  x: {
    likes: string[];
  };
  insta: {
    likes: string[];
  };
};
export type { CombinedData, InstagramPost, XPost, ChartData };
