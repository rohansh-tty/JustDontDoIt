module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
  theme:{
    
  },
  variants: {
    extend: {
      colors:{ 'redpink': "#EF5350",
      'lightblue': "#42A5F5",},
      opacity: ['disabled']
    }
  }
}
