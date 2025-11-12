import { Page } from '@playwright/test';
export class TextBoxPage {
    constructor(private page: Page) {}

    async fillForm(name: string, email: string, currentAddress: string, permanentAddress: string) {
        await this.page.fill('#userName', name);
        await this.page.fill('#userEmail', email);
        await this.page.fill('#currentAddress', currentAddress);
        await this.page.fill('#permanentAddress', permanentAddress);
    }

    async submitForm() {
        await this.page.click('#submit');
    }

}