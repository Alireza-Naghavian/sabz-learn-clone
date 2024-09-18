import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "320px",
      sm: `640px`,
      md: `768px`,
      lg: `1024px`,
      xl: `1280px`,
      "2xl": `1366px`,
      "3xl": "1440px",
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xs: "0.625rem",
        },
      },
      colors: {
        dark:"#333c4c",
        grayTheme: "#242a38",
        darker: "#242a38", //darker
        baseColor: "#22c55e",
        secondary: "#0ea5e9",
      },
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        Morabba_bold: "Morabba Bold",
      },
      boxShadow: {
        light: "0 1px 60px rgba(0,0,0,5%)",
      },
      spacing: {
        "def-size": "1920px",
        4.5: "1.5rem",
        5.5: "1.375rem",
        25: "6.25rem",
        13: "3.25rem",
      },
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: any }) {
      addVariant(`child`, `&>*`);
      addVariant(`child-hover`, `&>*:hover`);
    },
  ],
};
export default config;
