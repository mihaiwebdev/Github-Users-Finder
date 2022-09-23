/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/layout/Navbar.jsx",
    "./src/components/layout/Footer.jsx",
    "./src/components/layout/Spinner.jsx",
    "./src/components/layout/Alert.jsx",
    "./src/pages/Home.jsx",
    "./src/pages/About.jsx",
    "./src/pages/NotFound.jsx",
    "./src/pages/User.jsx",
    "./src/components/users/UserResults.jsx",
    "./src/components/users/UserItem.jsx",
    "./src/components/users/UserSearch.jsx",
    "./src/components/repos/RepoList.jsx",
    "./src/components/repos/RepoItem.jsx",
  ],
  theme: {
    colors: {
      'primarybg': '#010409',
      'secondarybg': "#0d1117",
      'navbar': "#161b22",
      'border': "#30363d",
      'text': "#c9d1d9",
      'secondarytext': "#8b949e",
      'greenbtn': "#238636",
      'white': "#fff",
      'red': '#f87171',
    },
    extend: {},
  },
  plugins: [require('daisyui')],

}
