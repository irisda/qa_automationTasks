const LoginPage = require('../pageObjects/login.page');
const {email, password } =  require('../pageObjects/configuration.page');
describe('Login Page', () => {
    it('Check that can not login with email only',  () => {
         LoginPage.open();
         LoginPage.vlidatePresenceOfElements();
         LoginPage.login(email);
         browser.pause(10000)
         LoginPage.validateErrorMessage(1,'Please enter your password.');
    });

    it('Check that can login with email and password',  () => {
        LoginPage.open();
        LoginPage.vlidatePresenceOfElements();
        LoginPage.login(email,password);
        browser.pause(10000)
        LoginPage.validateErrorMessage(0,'No account found with that username.');
   });
    it('Check that test fails with wrong credentails',  () => {
        LoginPage.open();
        LoginPage.vlidatePresenceOfElements();
        LoginPage.login(email,password);
        browser.pause(5000)
        LoginPage.validateSuccesLogin()
     });
});

 // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
