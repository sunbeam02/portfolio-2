/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        btnColor:"#27ae60",
        headerColor:"#ffffff",
      },
     fontFamily:{
      textFont:["Inter", "San-serif"],
      headerFont:["Times New Roman, San-serif"]
     } 
    },
  },
  plugins: [],
}
