import {Page, Locator} from '@playwright/test';
import Constants from '../utils/constants/constants.ts';

export class InventoryPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }    
}