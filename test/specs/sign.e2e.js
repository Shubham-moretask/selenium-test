

import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SignupPage from '../pageobjects/signup.page.js';

describe('Signup functionality', () => {
    it('should signup with valid credentials', async () => {
        await SignupPage.open(); // Navigate to the signup page

        await SignupPage.signup('John Doe', 'johndoe@example.com', 'Password123');
        // Optionally, you can add assertions here to verify signup success

        // Example assertion to check if the signup was successful
        await expect(LoginPage.btnSubmit).toBeExisting(); // Assuming it redirects to login after signup
    });
});