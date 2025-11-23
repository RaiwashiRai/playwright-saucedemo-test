import { test, expect } from './baseTest.ts';
import Constants from '../../utils/constants/constatns';

test.describe('Login Tests', () => {
});

Constants.validUserNames.forEach((username) => {
    test(`Login Success Test for ${username}`, async ({loginPage}) => {
        await loginPage.login(username, Constants.PASSWORD);
        await expect(loginPage.page).toHaveURL(Constants.INVENTORY_URL);
    });
});

test('Login Locked Out User Test', async ({loginPage}) => {
    await loginPage.login(Constants.LOCKED_OUT_USER, Constants.PASSWORD);
    await expect(loginPage.errorMessage).toHaveText(Constants.loginErrorMessages.LOCKED_OUT);
});

Constants.validUserNames.forEach((username) => {
    test(`Login Wrong Password Test for ${username}`, async ({loginPage}) => {
        await loginPage.login(username, Constants.WRONG_PASSWORD);
        await expect(loginPage.errorMessage).toHaveText(Constants.loginErrorMessages.INVALID_CREDENTIALS);
    });
});

test('Login wrong Username Test', async ({loginPage}) => {
    await loginPage.login(Constants.WRONG_USERNAME, Constants.PASSWORD);
    await expect(loginPage.errorMessage).toHaveText(Constants.loginErrorMessages.INVALID_CREDENTIALS);
});