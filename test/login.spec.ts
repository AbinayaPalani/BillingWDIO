import {expect} from 'chai';
import LoginPage from '../src/pages/LoginPage';


describe('Login page', () => {
    it('should allow access with correct credentials', () => {
        LoginPage.open;
        LoginPage.loginWithCredentials('tomsmith', 'SuperSecretPassword!');
        
        expect(LoginPage.flash).to.include('You logged into a secure area!');
    });
});


