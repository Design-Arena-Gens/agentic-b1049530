import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        flutterBlue: "#02539a",
        flutterTeal: "#17c0ce"
      }
    }
  },
  plugins: []
};

export default config;
