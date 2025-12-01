import {Page, Locator} from '@playwright/test';

export class CartPage {

    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly cartItemsList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
        this.cartItemsList = page.locator('[data-test="inventory-item"]');
    }


    async clickCheckout() {
        await this.checkoutButton.click();
    }

    async clickContinueShopping() {
        await this.continueShoppingButton.click();
    }
}