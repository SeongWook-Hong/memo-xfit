import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["borderColor", "bg-orange", "bg-disabled"],
  theme: {
    extend: {
      colors: {
        borderColor: "var(--borderColor)",
        orange: "var(--orange)",
        red: "var(--red)",
        disabled: "var(--disabled)",
      },
    },
  },
  plugins: [],
} satisfies Config;
