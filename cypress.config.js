const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: "cypress-mochawesome-reporter",
  env: {
    thor: { url: "https://micro-nemo.comprodls.com/", code: "thor" },
    qa: { url: "https://qa.cambridgeone.org/", code: "qa" },
    rel: { url: "https://release.cambridgeone.org/", code: "rel" },
    prod: { url: "https://www.cambridgeone.org/", code: "prod" },
  },
  e2e: {
    watchForFileChanges: false,
    testIsolation: true,
    defaultCommandTimeout: 30000,
    experimentalOriginDependencies: true,
  
  },
});