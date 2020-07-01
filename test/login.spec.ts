import {expect} from 'chai';
import LoginPage from '../src/pages/LoginPage';


describe('Login page', () => {
    it('should allow access with correct credentials', () => {
        LoginPage.open;
        console.log(browser.getTitle())

        LoginPage.loginWithCredentials('tomsmith', 'SuperSecretPassword!');
        
        expect(LoginPage.flash).to.include('You logged into a secure area!');
    });
});


