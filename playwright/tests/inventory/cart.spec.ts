import { InventoryPage } from '../../pages/InventoryPage.ts';
import Constants from '../../utils/constants/constants.ts';
import {test, expect} from '../fixtures/inventoryPage.fixture.ts';

test.describe('Cart Tests with Logged In State', () => {
    test('Add to Cart Test', async ({inventoryPage}) => {
        expect(inventoryPage.page).toHaveURL(Constants.INVENTORY_URL);
    });
});

test.describe('Cart Tests with diff user', () => {
    test.use({username: Constants.validUserNames[1], password: Constants.PASSWORD});
    test('Add to Cart Test with different user', async ({inventoryPage}) => {
        expect(inventoryPage.page).toHaveURL(Constants.INVENTORY_URL);
    });
});
