/** @type {import('tailwindcss').Config} */
import colors, { teal } from 'tailwindcss/colors'
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      fontSize:{
        'xxs': ['0.70rem', {
          lineHeight: '0.70rem',
        }],
        
      },

      height: {
        "boxHeight": "200px",
        "boxHoverH": "160px"
      },


      fontSize:{
        "xxs": ".70rem",
        "xxxs": ".60rem",
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
        "tableWidth" : "93%",
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
        dashboardHighlight: '#3a499b',
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

      spacing: {
        '102': '28rem', 
        'sortMargin' : '700px'

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
