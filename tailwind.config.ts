import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '7/10': '70%',
        '3/10': '30%',
      },
      screens: {
        t: { min: "768px" },
        tMax: { min: "767px", max: "1149px" },
        sd: { min: "1150px" },
        md: { min: "1366px" },
        ld: { min: "1601px" },
      },
      colors: {
        primary: "#00B4F1",
        secondary: "#052039",
        "grey-5f": "#344A5F",
        "grey-71": "#4B5F71",
        "grey-97": "#7A8997",
        "grey-aa": "#919EAA",
        "grey-bc": "#A8B3BC",
        "grey-cf": "#BFC7CF",
        "grey-e2": "#D7DCE2",
        "grey-eb": "#E2E7EB",
        "grey-f5": "#EEF1F5",
        "grey-fa": "#F4F7FA",
        "grey-fd": "#F2FAFD",
        "grey-fe": "#FAFCFE",
      },
    },
    container:{
      center:true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
