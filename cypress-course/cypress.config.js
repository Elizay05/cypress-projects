const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  env: {
    baseUrl: "https://example.cypress.io"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
