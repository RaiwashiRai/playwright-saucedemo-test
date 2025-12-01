import { Page, Locator } from "@playwright/test";

export class CheckoutCompletePage {
    readonly page: Page;
    readonly backHomeButton: Locator;
    readonly completeHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.backHomeButton = page.locator('[data-test="back-to-products"]');
        this.completeHeader = page.locator('.complete-header');
    }

    async clickBackHome() {
        await this.backHomeButton.click();
    }
}