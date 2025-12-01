import { Page, Locator } from '@playwright/test';

export class CheckoutStepTwoPage {
    readonly page: Page;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.finishButton = page.locator('[data-test="finish"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
    }

    async clickFinish() {
        await this.finishButton.click();
    }

    async clickCancel() {
        await this.cancelButton.click();
    }
}

