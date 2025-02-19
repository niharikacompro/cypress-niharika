// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("removeDomainName", (email) => {
    const atIndex = email.indexOf("@");
    if (atIndex !== -1) {
      const username = email.substring(0, atIndex);
      return username;
    } else {
      return email;
    }
  });
Cypress.Commands.add("generateRandomEmail", (code, user) => {
    return new Promise((res) => {
      const prefix = "cqa";
      const domain = "mailsac.com";
      const randomString = Math.random().toString(36).substring(2, 6);
      const email = `${prefix}${code}${user}${randomString}@${domain}`;
  
      res(email);
    });
  });
  