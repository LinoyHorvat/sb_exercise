const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // component: {
  //   devServer: {
  //     framework: 'react',
  //     bundler: 'webpack',
  //   },
  // },
  component: {
    setupNodeEvents(on, config) {},
    specPattern: "src/**/*.spec.{js,ts,jsx,tsx}",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
