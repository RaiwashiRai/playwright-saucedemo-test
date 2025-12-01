import { test as base, expect } from './loginPage.fixture.ts';
import { InventoryPage } from '../../pages/inventoryPage.ts';
import Constants from '../../utils/constants/constants.ts';


type MyFixtures = {
    inventoryPage: InventoryPage;
    username: string;
    password: string;
}

export const test = base.extend<MyFixtures>({
    // Credentials fixture, can be overridden in each test
    username: [Constants.validUserNames[0], { option: true }],
    password: [Constants.PASSWORD, { option: true }],

    inventoryPage: async ({ loginPage, username, password }, use) => {
        await loginPage.login(username, password);

        const inventoryPage = new InventoryPage(loginPage.page);
        await use(inventoryPage);
    }
});

export { expect };