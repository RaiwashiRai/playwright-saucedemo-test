import Constants from '../../utils/constants/constants.ts';
import {test, expect} from '../fixtures/inventoryPage.fixture.ts';
import { InventoryItem } from '../../pages/InventoryPage.ts';

// Destructure constants for button text to improve readability in assertions
const {
    ADD_TO_CART,
    REMOVE
} = Constants.inventoryItemButtonTexts;

test('Add or remove items Test', async ({inventoryPage}) => {
    // Get all inventory items and select one randomly to ensure test robustness
    let itemslist = await inventoryPage.getInventoryItems();
    let randomIndex = Math.floor(Math.random() * itemslist.length);

    // --- Add Item ---
    await itemslist[randomIndex].addRemoveToCartBtn.click();
    
    // Verify button text changes and cart badge appears with count '1'
    await expect(itemslist[randomIndex].addRemoveToCartBtn).toHaveText(REMOVE);
    await expect(inventoryPage.cartBadge).toBeVisible();
    await expect(inventoryPage.cartBadge).toHaveText('1');

    // --- Remove Item ---
    await itemslist[randomIndex].addRemoveToCartBtn.click();
    
    // Verify button text reverts and cart badge disappears
    await expect(itemslist[randomIndex].addRemoveToCartBtn).toHaveText(ADD_TO_CART);
    expect(inventoryPage.cartBadge).not.toBeVisible();
});
