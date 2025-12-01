import { test, expect } from '../fixtures/inventoryPage.fixture.ts';
import Constants from '../../utils/constants/constants.ts';
import { CartPage } from '../../pages/CartPage.ts';
import { CheckoutStepOnePage } from '../../pages/checkoutStepOnePage.ts';
import { CheckoutStepTwoPage } from '../../pages/checkoutStepTwoPage.ts';
import { CheckoutCompletePage } from '../../pages/checkoutCompletePage.ts';

const {
    FIRST_NAME,
    LAST_NAME,
    POSTAL_CODE
} = Constants.checkoutInfo;

test('Complete checkout flow', async ({ inventoryPage }) => {

    // adding a random item to cart
    let items = await inventoryPage.getInventoryItems();
    let randomItem = items[Math.floor(Math.random() * items.length)];

    await randomItem.addRemoveToCartBtn.click();

    // navigating to cart page and clicking checkout
    await inventoryPage.gotoCartPage();

    const cartPage = new CartPage(inventoryPage.page);
    await cartPage.clickCheckout();

    // filling in checkout info and continuing
    const checkoutStepOnePage = new CheckoutStepOnePage(inventoryPage.page);
    await checkoutStepOnePage.enterCheckoutInformation(FIRST_NAME, LAST_NAME, POSTAL_CODE);
    await checkoutStepOnePage.clickContinue();

    // finishing checkout
    const checkoutStepTwoPage = new CheckoutStepTwoPage(inventoryPage.page);
    await checkoutStepTwoPage.clickFinish();

    // verifying checkout complete
    await expect(checkoutStepTwoPage.page).toHaveURL(Constants.CHECKOUT_COMPLETE_URL);

    const checkoutCompletePage = new CheckoutCompletePage(inventoryPage.page);
    await expect(checkoutCompletePage.completeHeader).toHaveText(Constants.CHECKOUT_COMPLETE_HEADER_TEXT);

    // navigating back to home
    await checkoutCompletePage.clickBackHome();
    await expect(checkoutCompletePage.page).toHaveURL(Constants.INVENTORY_URL);
    
});