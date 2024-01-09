/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "principal":['Open Sans', 'sans-serif']
    },
    colors: {
     
      'amarilloclarito':'#fef08a',
      'verdelima' :'#a3e635',
      'verdeclarito':'#bef264',
      'yellow':'#fef08a',
      'green' :'#16a34a',
      'cyan ':'#06b6d4',
      'azuloscuro':'#001C30',
      'azulprueba1':'#005E7C',
      'azulslider':'#001c307d'
      

    },
    backgroundImage: {
      "cerrar-menu":"url( '/images/iconomenucerrado.png')",
      "abrir-menu":"url( '/images/iconomenu.png')"
  },
  },
  },
  plugins: [],
}