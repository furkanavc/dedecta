import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "360px",
        sm: "600px",
        md: "700px",
        lg: "984px",
        xl: "984px",
        "2xl": "1100px",
      },
    },
  },
};
