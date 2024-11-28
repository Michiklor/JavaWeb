module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // כל הקבצים של React
    "./node_modules/flowbite/**/*.js" // הוספת Flowbite לתחום התוכן
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // שילוב Flowbite כתוסף
  ],
}
