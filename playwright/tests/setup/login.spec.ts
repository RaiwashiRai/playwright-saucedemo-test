import {test} from '../fixtures/loginPage.fixture.ts';
import Constants from '../../utils/constants/constants.ts';

test('save login state for standard user', async ({ loginPage }) => {
    await loginPage.login(Constants.validUserNames[0], Constants.PASSWORD);
    await loginPage.page.context().storageState({ path: './tests/setup/standardUserState.json' });
});