
import { SignupPage } from "./pages/SignupPage";
const signupPage = new SignupPage();


describe('Login Functionality', () => {
 it.only("signup functionality for teacher",()=>{
  cy.visit("https://micro-nemo.comprodls.com/home", {
    headers: {
      "CF-Access-Client-Id": "caaa6c9ee84a2197731733daf066007e.access",
      "CF-Access-Client-Secret":
        "df1b11111cc4c4fbb4a1266273363e2de31cd3be6735fb2e9c67616bc7b6e6ee",
    },
  });

    cy.get('a[href="/regoptions"]').click();
    signupPage.signupUser("Teacher","mailsac3@gmail.com","Compro11");
    cy.wait(20000);
  

     })

  it('should log in successfully with valid credentials', () => {
    cy.visit('https://micro-nemo.comprodls.com/login'); 
    // Enter valid username and password
    cy.get('input[id="gigya-loginID-56269462240752180"]').type('niharikacomprotechnologies.com@gmail.com');
    cy.get('input[id="gigya-password-56383998600152700"]').type('compro12');

    // Click the login button
    cy.get('input[type="submit"]').click();

    // Assert the user is redirected to the dashboard or expected page
    cy.url().should('include', 'https://micro-nemo.comprodls.com/dashboard/teacher/dashboard');  // Update with the expected page after login
    cy.contains('Hi Niharika!');  // Update with the expected message or element
  });

 
});
