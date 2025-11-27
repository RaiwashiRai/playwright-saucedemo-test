import { Page, Locator } from '@playwright/test';

/**
 * Defines the structure for an item found on the inventory page.
 * Used for type-safe handling of item data across the Page Object Model.
 */
export interface InventoryItem {
    name: string | null;
    price: string | null;
    addRemoveToCartBtn: Locator; // A locator for the specific add/remove button of this item
}

/**
 * Represents the main Products/Inventory Page, abstracting interactions with the list of available products.
 */
export class InventoryPage {

    readonly page: Page;
    // Locator that targets all individual item containers on the page
    readonly itemsList: Locator;
    readonly cartLink: Locator;
    readonly cartBadge: Locator;


    /**
     * Initializes the InventoryPage object.
     * @param page The Playwright Page instance
     */
    constructor(page: Page) {
        this.page = page;
        // Robust locator using a data-test attribute
        this.itemsList = page.locator('[data-test="inventory-item"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    /**
     * Retrieves all visible items on the current inventory page as structured objects.
     * @returns A promise that resolves to an array of InventoryItem objects.
     */
    async getInventoryItems(): Promise<InventoryItem[]> {
       return await this.parseItems(await this.itemsList.all());
    }

    async getCartItemCount(): Promise<number> {
        const badgeText = await this.cartBadge.textContent();
        return badgeText ? parseInt(badgeText) : 0;
    }

    /**
     * Navigates the browser to the shopping cart page.
     */
    async gotoCartPage(){
        await this.cartLink.click();
    }

    /**
     * Helper method to iterate over a list of locators and extract item details into structured objects.
     * @param itemsLocatorslist An array of Locators, where each locator points to an inventory item container.
     * @returns A promise that resolves to an array of InventoryItem objects.
     */
    private async parseItems(itemsLocatorslist: Locator[]): Promise<InventoryItem[]> {
        var items: InventoryItem[] = [];

        for (const itemLocator of itemsLocatorslist) {
            // Locate specific elements within the context of the current item's locator
            let name = await itemLocator.locator('[data-test="inventory-item-name"]').textContent();
            let price = await itemLocator.locator('[data-test="inventory-item-price"]').textContent();
            let addRemoveToCartBtn = itemLocator.locator('button');

            // Push a structured object adhering to the InventoryItem interface
            items.push({
                "name": name,
                "price": price,
                "addRemoveToCartBtn": addRemoveToCartBtn
            })
        }

        return items;
    }
}
