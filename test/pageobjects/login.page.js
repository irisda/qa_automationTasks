const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('input[name="username"]') }
    get inputPassword () { return $('input[name="password"]') }
    get btnSubmit () { return $('input[type="submit"]') }
     get textError() { return $$('span.help-block') }
    /**
     * a method to login with username and password as paramters
     */
     login (username, password) {
         this.inputUsername.setValue(username);
         this.inputPassword.setValue(password);
         this.btnSubmit.click();
    }
  // We are validating if elements are present or not
     async vlidatePresenceOfElements () {
        await expect(await (await this.inputUsername).isDisplayed()).toBe(true);
        await expect(await (await this.inputPassword).isDisplayed()).toBe(true);
        // check if submit button is displayed or not
        await expect(await (await this.btnSubmit).isDisplayed()).toBe(true);
         // check if submit button is clickable or not
        await expect(await (await this.btnSubmit).isClickable()).toBe(true);
    }
  
    /** 
     *  We are validating if error masages are present or not
     * @index parameter to get error message position
     * @resultMessage paramter for chekcing the error message we expect
    */
      validateErrorMessage (index, resultMessage) {
      //wait for error message to be displayed
      browser.waitUntil(() => this.textError[index].isDisplayed())
      browser.pause(1000)
      expect(this.textError[index].getText()).toBe(resultMessage);
    }

      validateSuccesLogin(){
        browser.waitUntil(function() {
            return browser.getUrl() === baseUrl + '/success';
        }, 5000);
      }
    
}

module.exports = new LoginPage();
