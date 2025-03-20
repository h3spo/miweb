import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
       secondary: "#57cd90",
       darkBg: "#616671",
      },
      backgroundImage: {
        "gradient-cover":
        "linear-gradient(90.21deg, rgba(44, 44, 46, 0.5) -5.91%, rgba(34, 34, 39, 0.5) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;
