import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent:{
          DEFAULT: "hsl(var(--accent))",
          quater: "hsla(var(--accent) / 25%)",
          ten: "hsla(var(--accent) / 10%)",
        },
        text: "hsl(var(--text))",
        success: {
          DEFAULT: "hsl(var(--success))",
          background: "hsla(var(--success) / 10%)",
          border: "hsl(var(--success-border))",
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          background: "hsla(var(--warning) / 5%)",
        }
      },
      fontSize: {
        "2xs": ['11px', '14px'],
      },
    },
  },
  plugins: [],
};
export default config;
