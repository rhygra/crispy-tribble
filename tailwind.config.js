module.exports = {
  theme: {
    spinner: theme => ({
      default: {
        color: "#dae1e7", // color you want to make the spinner
        size: "2em", // size of the spinner (used for both width and height)
        border: "2px", // border-width of the spinner (shouldn't be bigger than half the spinner's size)
        speed: "500ms" // the speed at which the spinner should rotate
      }
      // md: {
      //   color: theme('colors.red.500', 'red'),
      //   size: '2em',
      //   border: '2px',
      //   speed: '500ms',
      // },
    }),
    extend: {}
  },
  variants: {},
  plugins: [require("tailwindcss-spinner")()]
};
