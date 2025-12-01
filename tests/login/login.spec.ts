import { test, expect } from '../fixtures/loginPage.fixture.ts';
import Constants from '../utils/constants/constants.ts';

const { 
    validUserNames, 
    PASSWORD,
    LOCKED_OUT_USER,
    WRONG_PASSWORD,
    WRONG_USERNAME,
    INVENTORY_URL,
    loginErrorMessages
} = Constants; 


test.describe('Login Success Tests', () => {
    Constants.validUserNames.forEach((username) => {
        test(`Login Success Test for ${username}`, async ({loginPage}) => {
            await loginPage.login(username, PASSWORD);
            await expect(loginPage.page).toHaveURL(INVENTORY_URL);
        });
    });
});


test.describe('Login Failure Tests', () => {
    test('Login Locked Out User Test', async ({loginPage}) => {
        await loginPage.login(LOCKED_OUT_USER, PASSWORD);
        await expect(loginPage.errorMessage).toHaveText(loginErrorMessages.LOCKED_OUT);
    });

    validUserNames.forEach((username) => {
        test(`Login Wrong Password Test for ${username}`, async ({loginPage}) => {
            await loginPage.login(username, WRONG_PASSWORD);
            await expect(loginPage.errorMessage).toHaveText(loginErrorMessages.INVALID_CREDENTIALS);
        });
    });

    test('Login wrong Username Test', async ({loginPage}) => {
        await loginPage.login(WRONG_USERNAME, PASSWORD);
        await expect(loginPage.errorMessage).toHaveText(loginErrorMessages.INVALID_CREDENTIALS);
    });
});