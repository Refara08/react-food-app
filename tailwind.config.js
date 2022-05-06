module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-img": "url(./img/hero-img.jpg)",
      },
      keyframes: {
        "burger1-activate": {
          "0%": { tansform: "translateY(-200%)" },
          "50%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(100%) rotate(45deg)" },
        },
        "burger2-activate": {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
        "burger3-activate": {
          "0%": { tansform: "translateY(200%)" },
          "50%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(-100%) rotate(135deg)" },
        },
      },
      animation: {
        "burger1-activate": "burger1-activate 1s forwards ease-out",
        "burger2-activate": "burger2-activate 1s forwards ease-out",
        "burger3-activate": "burger3-activate 1s forwards ease-out",
        "burger1-deactivate": "burger1-activate 1s reverse forwards ease-out",
        "burger2-deactivate": "burger2-activate 1s reverse forwards ease-out",
        "burger3-deactivate": "burger3-activate 1s reverse forwards ease-out",
      },
    },
  },
  plugins: [],
};
