/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index-cart.html",
    "./index-help.html",
    "./index-shop-checkout.html",
    "./index-shop-checkout-complete.html",
    "./index-grid-shop-2.html",
    "./index-single-shop.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      transitionDelay: {
        500: "500ms",
      },
      animation: {
        load: "load 2s ease 300ms",
        loadH: "loadH 2s ease 350ms",
        loadP: "loadP 2s ease 370ms",
        loadBTN: "loadBTN 2s ease 390ms",
        // gifti: "gifti 2s ease 300ms"
      },
    },
    fontFamily: {
      myFont: ["sanserif"],
    },
    colors: {
      bs_primary: "#f82ba9",
      bs_pink: "#FEEDF7",
      bs_purple: "#8C52FF",
      lastColor: "#0dcaf0",
      bs_textColor: "#160e4b",
      bs_paraGray: "#757f95",
      bs_white: "#ffffff",
      bs_black: "#000000",
      bs_border: "#ebebeb",
      bs_success: "#82b440",
      bs_warning: "#f05454",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        md: "1024px",
        lg: "1124px",
        xl: "1324px",
        "2xl": "1324px",
      },
    },

    keyframes: {
      load: {
        from: {
          transform: " translateY(-50px)",
          opacity: "0",
        },
        to: {
          transform: " translateY(0)",
          opacity: "1",
        },
      },
      loadH: {
        from: {
          transform: " translateX(50px)",
          opacity: "0",
        },
        to: {
          transform: " translateX(0)",
          opacity: "1",
        },
      },
      loadP: {
        from: {
          transform: " translateX(-50px)",
          opacity: "0",
        },
        to: {
          transform: " translateX(0)",
          opacity: "1",
        },
      },
      loadBTN: {
        from: {
          transform: " translateY(-40px)",
          opacity: "0",
        },
        to: {
          transform: " translateX(0)",
          opacity: "1",
        },
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
