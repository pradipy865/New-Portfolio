/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0e1f",
        panel: "#11162b",
        line: "#232a48",
        paper: "#eef0fa",
        mute: "#98a0c4",
        iris: "#8b8cff",
        mint: "#5eead4",
        sun: "#ffc46b",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: { "0%": { opacity: 0, transform: "translateY(18px)" }, "100%": { opacity: 1, transform: "none" } },
        drift: { "0%,100%": { transform: "translate(0,0)" }, "50%": { transform: "translate(30px,-20px)" } },
        blink: { "50%": { opacity: 0 } },
      },
      animation: {
        rise: "rise .8s cubic-bezier(.2,.7,.2,1) both",
        drift: "drift 14s ease-in-out infinite",
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
