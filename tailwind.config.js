const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
	transparent: 'transparent',
	current: 'currentColor',
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
  plugins: [],
}