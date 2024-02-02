const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  scrollBehavior: 'center',
  e2e: {
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demo.nopcommerce.com/',
    apiUrl:'https://serverest.dev/'
  },
});
