/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#202956",
          green: "#008747",
          gray: "#575756",
          light: "#e8f3ed"
        }
      },
      fontFamily: {
        display: ["Comfortaa", "system-ui", "sans-serif"],
        body: ["Comfortaa", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #202956 0%, #1a445f 40%, #008747 100%)",
        "brand-radial": "radial-gradient(circle at 20% 20%, rgba(32,41,86,0.4), transparent 40%), radial-gradient(circle at 80% 0%, rgba(0,135,71,0.35), transparent 35%)"
      },
      boxShadow: {
        glow: "0 20px 60px rgba(0, 135, 71, 0.18)",
        panel: "0 10px 40px rgba(32, 41, 86, 0.16)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        pulseGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "pulse-gradient": "pulseGradient 6s ease infinite"
      }
    }
  },
  plugins: []
};
