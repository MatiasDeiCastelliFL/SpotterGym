import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 10px 0.1px #303030'},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryDefault:"#F58A07",
        primaryDark:"#905104",
        primaryDef:"#F58A07",
        'primary-dark': '#905104',
        'primary-light': '#FCCF97',
        primaryLigth:"#FCCF97",
        gray200:"#E9ECEF",
        gray600: "#6C757D",
        gray700:"#495057",
        gray800:"#343a40",
        gray900: "#212529",
        gray1000:"#141414"

      },
      borderRadius: {
        'custom1': '10px 0px 0px 10px',
        'custom2': '0px 10px 10px 0px'
      },
      borderWidth: {
        '1.5': '1.5px',
      },
      fontSize: {
        '28': '28px',
        '8': '8px'
      },
      fontFamily: {
        'sans': ['Work Sans', 'sans-serif']
      },
      width: {
        '77': '77px',
        'custom': '328px',
        'customGraphic':'329.5px'
      },
      height: {
        '32':'32px',
        '41px':'41px',
        'custom': '85px',
        'customGraphic':'192px',
        'customModal':'242.74px'
      },
      spacing: {
        '35px': '35px',
        '24px': '24px',
        '18px':'18px',
        '10px':'10px',
        '9px':'9px',
        '29px':'29px',
      }
      
    },
  },
  plugins: [],
};
export default config;
