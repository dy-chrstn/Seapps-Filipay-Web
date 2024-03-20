/** @type {import('tailwindcss').Config} */
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
        "300": "300px"
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
      }



    },
    colors: {
      bgColor: "#222831",//#222831
      white: "#EEEEEE",
      pink: "pink",
      bghover: "#31363F",
      //#31363F
      //#76ABAE
      textColor: "#EEEEEE",//#EEEEEE
      button: "#76ABAE"
    },
    fontSize: {
      fontTitle: "30px",
    }
  
  },
  plugins: [],
}