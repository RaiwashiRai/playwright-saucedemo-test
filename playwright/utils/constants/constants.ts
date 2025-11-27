const Constants = {
    BASE_URL: 'https://www.saucedemo.com/',
    LOGIN_URL: 'https://www.saucedemo.com/', // login page is the base
    INVENTORY_URL: 'https://www.saucedemo.com/inventory.html',
    CART_URL: 'https://www.saucedemo.com/cart.html',
    CHECKOUT_STEP_ONE_URL: 'https://www.saucedemo.com/checkout-step-one.html',
    CHECKOUT_STEP_TWO_URL: 'https://www.saucedemo.com/checkout-step-two.html',
    CHECKOUT_COMPLETE_URL: 'https://www.saucedemo.com/checkout-complete.html',

    validUserNames: ['standard_user', 'problem_user', 'performance_glitch_user'],
    LOCKED_OUT_USER: 'locked_out_user',
    PASSWORD: 'secret_sauce',
    WRONG_PASSWORD: 'wrong_password',
    WRONG_USERNAME: 'wrong_user',

    loginErrorMessages: {
        LOCKED_OUT: 'Epic sadface: Sorry, this user has been locked out.',
        INVALID_CREDENTIALS: 'Epic sadface: Username and password do not match any user in this service'
    },

    inventoryItemButtonTexts: {
        ADD_TO_CART: 'Add to cart',
        REMOVE: 'Remove'
    },

    checkoutInfo: {
        FIRST_NAME: 'John',
        LAST_NAME: 'Doe',
        POSTAL_CODE: '12345'
    },

    CHECKOUT_COMPLETE_HEADER_TEXT: 'Thank you for your order!'
};

export default Constants;
