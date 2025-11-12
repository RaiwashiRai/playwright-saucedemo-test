import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../../pages/demoqa/textboxPage';
import Constants from '../../utils/constants/demoqa.constatns';

test('Text Box Form Submission', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    await page.goto(Constants.TEXT_BOX_URL);

    await textBoxPage.fillForm(
        Constants.NAME, 
        Constants.EMAIL, 
        Constants.CURRENT_ADDRESS, 
        Constants.PERMANENT_ADDRESS
    );

    await textBoxPage.submitForm();


    // asserts data entered is same as data submitted
    await Promise.all([
        expect(page.locator('#name')).toHaveText(`Name:${Constants.NAME}`),
        expect(page.locator('#email')).toHaveText(`Email:${Constants.EMAIL}`),
        expect(page.locator('p#currentAddress')).toHaveText(`Current Address :${Constants.CURRENT_ADDRESS}`),
        expect(page.locator('p#permanentAddress')).toHaveText(`Permananet Address :${Constants.PERMANENT_ADDRESS}`),
    ]);
});