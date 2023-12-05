/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "12xl": ["11.4rem", "8rem"],
      },
      colors: {
        "con-primary": "#f9e9d1",
        cprimary:  {
          60: "rgba(249, 196, 44, 0.6)",
          DEFAULT: "#f9c42c",
        },
        csecondary: "#dc2510",
        "con-secondary": {
          60: "rgba(46, 11, 7, 0.6)",
          DEFAULT: "#2e0b07",
        },
        ctertiary: "#56cfc9",
      },
      fontFamily: {
        fheader: ["bayon"],
        ftext: ["poppins"],
        fdecorated: ["Racing Sans One"],
      },
    },
  },
};
