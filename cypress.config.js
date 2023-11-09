// const { defineConfig } = require("cypress");

module.exports = {
  type: 'Module',
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,
  screenshotOnRunFailure:true,
  log:true,
  watchForFileChanges:false,
  defaultCommandTimeout:6000,
  pageLoadTimeout:10000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    mochaFile: "cypress/results/results.xml",
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    specPattern: 'cypress/e2e/*.cy.{js,jsx,ts,tsx}'
  },
};
