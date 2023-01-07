/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        bookgara: "url('https://res.cloudinary.com/dhxccll9e/image/upload/v1663668811/homePage/mainCard/work_02_-_Bookgara_eyirpo.svg')",
        foodbuster: "url('https://res.cloudinary.com/dhxccll9e/image/upload/v1663673222/homePage/mainCard/work_03_-_Foodbusters_y1ucvg.jpg')",
      },
      fontFamily: {
        sans: ["Trap-Regular"],
        bold: ["Trap-Bold"],
        black: ["Trap-Bold"],
      },
      colors: {
        primary: "#0A0A0B",
        primaryOption: "#161616",
        secondary: "#FFFFFF",
        cyan: {
          100: "#47A1AD",
          200: "#E3F3FE",
        },
        tomato: {
          100: "#F2617A",
        },
        yellow:{
          100: "#FFF4C4",
          200:  "#B98434"
        },
        green:{
          100: "#609F4A"
        },
        gray: {
          100: "#383838",
          200: "#8C8D94",
          300: "#F4F5FA",
          400: "#F5F5F5",
          500: "#DC8D94",
          600: "#E6E6E6",
          700: "#C1C1C1",
          800:"#262626",
        },
        black: {
          100: "#161616",
          200: "#000000",
          300: "#0D0D0D",
        },
        subText: {
          100: "#8C8D94",
        },
        visibility: ["group-hover"],
      },
    },
  },
  plugins: [],
};
