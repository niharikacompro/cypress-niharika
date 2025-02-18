export class SignupPage{
    teacher_radiobtn = "#teacher-radio > .r-container > #teacher-radio-input";
    next_btn = "[value='Next']";
    continue_btn = ".continue-btn > :nth-child(1)";
    firstname_textbox = "#gigya-textbox-120640165044771760";
    lastname_textbox = "#gigya-textbox-56649036382991330";
    email_textbox = '.white-box input[name="email"]';
    password_textbox = "#gigya-password-56383998600152700";
    country_textbox = "#gigya-textbox-82415858032213200";
    privacy_checkbox = ".ptop-15 > .nemo-checkbox > .gigya-label";
    india_dropdown = '[aria-label="India"]';
    signup_submit = "[value='Sign up']";
    verify_submitted_email =
      "div:nth-child(1) > div.gigya-container.gigya-visible-when.gigya-container-enabled > label > div";
  
    signupUser(firstname,email,password){
        cy.wait(10000); // Give it time to load
        cy.get(".d-flex > #teacher-radio > .r-container > #teacher-radio-input").click();
        cy.get(this.next_btn).click();
        cy.wait(10000);
        cy.get(this.continue_btn).click();
        cy.wait(10000);
        cy.get(this.firstname_textbox).type(firstname);
        cy.get(this.lastname_textbox).type("User");
        cy.get(this.email_textbox).type(email);
        cy.get(this.password_textbox).type(password);
        cy.get(this.country_textbox).type("India");
        cy.get(this.india_dropdown).should("be.visible", { timeout: 10000 });
        cy.get(this.india_dropdown).click();
        cy.get(this.privacy_checkbox).click();

        cy.get(this.signup_submit).click();
        cy.wait(40000);
       cy.get(this.verify_submitted_email).should("have.text", email);


    }
}