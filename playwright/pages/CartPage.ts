import {Page, Locator} from '@playwright/test';
import { InventoryItem as CartItem } from './InventoryPage.ts';

export class CartPage {
    readonly page: Page;
    readonly cartItemsList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItemsList = page.locator('[data-test="inventory-item"]');
    }

}