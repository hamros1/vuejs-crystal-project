const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  plugins: [],
  purge: [
    './src/*.{js,jsx,ts,tsx,vue}',
    './src/views/*.ecr',
  ],
  theme: {
    fontFamily: {
      'sans': ['Lato'],
      'serif': ['Lato'],
    },
    extend: {
      backgroundImage: {
	'hero-pattern': "url('data:image/svg+xml;base64,JTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkICB0aD0nMTUyJyBoZWlnaHQ9JzE1Micgdmlld0JveD0nMCAwIDE1MiAxNTInJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBpZD0ndGVtcGxlJyBmaWxsICA9JyUyMzk1OWRhNScgZmlsbC1vcGFjaXR5PScwLjAyJyUzRSUzQ3BhdGggZD0nTTE1MiAxNTB2Mkgwdi0yaDI4di04SDh2LTIwSDB2LTJoOFY4MGg0MnYyMGgyMHY0ICAySDMwdjhoOTB2LThIODB2LTQyaDIwVjgwaDQydjQwaDhWMzBoLTh2NDBoLTQyVjUwSDgwVjhoNDBWMGgydjhoMjB2MjBoOFYwaDJ2MTUwem0tMiAwdi0yOGgtOHYyICAwaC0yMHY4aDI4ek04MiAzMHYxOGgxOFYzMEg4MnptMjAgMThoMjB2MjBoMThWMzBoLTIwVjEwSDgydjE4aDIwdjIwem0wIDJ2MThoMThWNTBoLTE4em0yMC0yMmgxICA4VjEwaC0xOHYxOHptLTU0IDkydi0xOEg1MHYxOGgxOHptLTIwLTE4SDI4VjgySDEwdjM4aDIwdjIwaDM4di0xOEg0OHYtMjB6bTAtMlY4MkgzMHYxOGgxOHptLTIwICAgMjJIMTB2MThoMTh2LTE4em01NCAwdjE4aDM4di0yMGgyMFY4MmgtMTh2MjBoLTIwdjIwSDgyem0xOC0yMEg4MnYxOGgxOHYtMTh6bTItMmgxOFY4MmgtMTh2MTh6ICBtMjAgNDB2LTE4aDE4djE4aC0xOHpNMzAgMGgtMnY4SDh2MjBIMHYyaDh2NDBoNDJWNTBoMjBWOEgzMFYwem0yMCA0OGgxOFYzMEg1MHYxOHptMTgtMjBINDh2MjBIICAyOHYyMEgxMFYzMGgyMFYxMGgzOHYxOHpNMzAgNTBoMTh2MThIMzBWNTB6bS0yLTQwSDEwdjE4aDE4VjEweicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0U=')"
      },
      colors: {
	transparent: 'transparent',
	current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      }
    },
  },
  variants: {
    extend: {},
  },
}
