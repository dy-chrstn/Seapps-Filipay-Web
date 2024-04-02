/** @type {import('tailwindcss').Config} */
import colors, { teal } from 'tailwindcss/colors'
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      height: {
        "boxHeight": "200px",
        "boxHoverH": "160px"
      },

      width: {
        "boxWidth": "200px",
        "boxHoverW": "155px",
        "150px": "150px",
        "100px": "100px",
        "300": "300px",
        "80%": "80%",
        "70%": "70%",
        "10%": "10%",
      },
      inset: {
        'custom-top': '300px', // Define custom top direction
        // Add more custom inset values as needed
        'custom-top-bot': '300px auto'
      },

      borderWidth: {
        '1': '1px', // Border width of 1px
        // Add more custom border widths as needed
      },

      transitionDuration: {
        '5s': '5s', 
        // Add more custom transition durations as needed
      },
      colors: {
        dashboardPurple: '#273c90',
        // Tailwind's default color palette
        transparent: 'transparent',
        current: 'currentColor',
        // Additional common colors
        primary: '#007bff', // Primary color
        secondary: '#6c757d', // Secondary color
        success: '#28a745', // Success color
        info: '#17a2b8', // Info color
        warning: '#ffc107', // Warning color
        danger: '#dc3545', // Danger color
        light: '#f8f9fa', // Light color
        dark: '#343a40', // Dark color
        buttonTeal: '#0db3f0', //for Swiper Button
        buttonDarkTeal: '#4096f6',//for Swiper Button
        buttonNeonPurple: '#9a63ff'//for Swiper Button
      },

      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'serif': ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },



    },

    variants: {
      extend: {
        borderColor: ['focus'], // Enable focus variants for border color
      },
    },
  
  },
  plugins: [],
}
