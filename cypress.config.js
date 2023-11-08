// "type": module
const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");


module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  allure:true,
  video: true,
  screenshotOnRunFailure:true,
  log:true,
  watchForFileChanges:false,
  defaultCommandTimeout:6000,
  pageLoadTimeout:10000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/*.cy.{js,jsx,ts,tsx}'
  },
});
