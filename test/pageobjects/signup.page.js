import { $ } from '@wdio/globals';
import Page from './page.js';

class SignupPage extends Page {
    get inputFullName () {
        return $('#full-name');
    }

    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSignup () {
        return $('button[type="submit"]');
    }

    async signup (fullName, email, password) {
        await this.inputFullName.setValue(fullName);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSignup.click();
    }
}

export default new SignupPage();
