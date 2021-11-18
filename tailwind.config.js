const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  plugins: [],
  purge: [
    './src/*.{js,jsx,ts,tsx,vue,ecr}',
    './src/views/*.{js,jsx,ts,tsx,vue,ecr}',
  ],
  theme: {
    extend: {
      backgroundImage: {
	'hero-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTIiIGhlaWdodD0iMTUyIiB2aWV3Qm94PSIwIDAgMTUyIDE1MiI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBpZD0idGVtcGxlIiBmaWxsPSIjMjI4YTk1IiBmaWxsLW9wYWNpdHk9IjAuMDgiPjxwYXRoIGQ9Ik0xNTIgMTUwdjJIMHYtMmgyOHYtOEg4di0yMEgwdi0yaDhWODBoNDJ2MjBoMjB2NDJIMzB2OGg5MHYtOEg4MHYtNDJoMjBWODBoNDJ2NDBoOFYzMGgtOHY0MGgtNDJWNTBIODBWOGg0MFYwaDJ2OGgyMHYyMGg4VjBoMnYxNTB6bS0yIDB2LTI4aC04djIwaC0yMHY4aDI4ek04MiAzMHYxOGgxOFYzMEg4MnptMjAgMThoMjB2MjBoMThWMzBoLTIwVjEwSDgydjE4aDIwdjIwem0wIDJ2MThoMThWNTBoLTE4em0yMC0yMmgxOFYxMGgtMTh2MTh6bS01NCA5MnYtMThINTB2MThoMTh6bS0yMC0xOEgyOFY4MkgxMHYzOGgyMHYyMGgzOHYtMThINDh2LTIwem0wLTJWODJIMzB2MThoMTh6bS0yMCAyMkgxMHYxOGgxOHYtMTh6bTU0IDB2MThoMzh2LTIwaDIwVjgyaC0xOHYyMGgtMjB2MjBIODJ6bTE4LTIwSDgydjE4aDE4di0xOHptMi0yaDE4VjgyaC0xOHYxOHptMjAgNDB2LTE4aDE4djE4aC0xOHpNMzAgMGgtMnY4SDh2MjBIMHYyaDh2NDBoNDJWNTBoMjBWOEgzMFYwem0yMCA0OGgxOFYzMEg1MHYxOHptMTgtMjBINDh2MjBIMjh2MjBIMTBWMzBoMjBWMTBoMzh2MTh6TTMwIDUwaDE4djE4SDMwVjUwem0tMi00MEgxMHYxOGgxOFYxMHoiLz48L2c+PC9nPjwvc3ZnPgo=');"
      },
      colors: {
	transparent: 'transparent',
	current: 'currentColor',
	black: colors.black,
	white: colors.white,
	bluegray: colors.blueGray,
	coolgray: colors.coolGray,
	gray: colors.gray,
	truegray: colors.trueGray,
	warmgray: colors.warmGray,
	red: colors.red,
	orange: colors.orange,
	amber: colors.amber,
	yellow: colors.yellow,
	lime: colors.lime,
	green: colors.green,
	emerald: colors.emerald,
	teal: colors.teal,
	cyan: colors.cyan,
	sky: colors.sky,
	blue: colors.blue,
	indigo: colors.indigo,
	violet: colors.violet,
	purple: colors.purple,
	fuchsia: colors.fuchsia,
	pink: colors.pink,
	rose: colors.rose,
      }
    },
  },
  variants: {
    extend: {},
  },
}
