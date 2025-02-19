export class MailsacPage {
    mailsac_user_login = 'input[name="username"]';
    mailsac_user_password = 'input[name="password"]';
    mailsac_signin_btn = "form.ng-dirty > .btn";
    mailsac_username_location = "h4.list-group-item";
    mailbox_textbox = ".form-control:nth-of-type(1)";
    submitbtn = ".btn-primary";
    mail_subject = ".inbox-subject";
    open_mail = ".btn-info";
    verifybtn = "td > a";
  
    verifyEmail(user_email) {
      cy.get(this.mailsac_user_login).type("comproqatest21@gmail.com");
      cy.get(this.mailsac_user_password).type("Compro11");
      cy.get(this.mailsac_signin_btn).click();
      cy.get(this.mailsac_username_location).should("be.visible");
      cy.removeDomainName(user_email).then((email) => {
        cy.log(email);
        cy.get(this.mailbox_textbox).type(email);
      });
      cy.get(this.submitbtn).click();
      cy.get(this.mail_subject).click();
      cy.get(this.open_mail).invoke("removeAttr", "target").click();
      cy.get(this.verifybtn).click();
    }
  }
  