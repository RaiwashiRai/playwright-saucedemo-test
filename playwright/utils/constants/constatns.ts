
const Constants = {
    BASE_URL: 'https://www.saucedemo.com/',
    INVENTORY_URL: 'https://www.saucedemo.com/inventory.html',
    validUserNames: ['standard_user', 'problem_user', 'performance_glitch_user'],
    LOCKED_OUT_USER: 'locked_out_user',
    PASSWORD: 'secret_sauce',
    WRONG_PASSWORD: 'wrong_password',
    WRONG_USERNAME: 'wrong_user',
    loginErrorMessages: {
        LOCKED_OUT: 'Epic sadface: Sorry, this user has been locked out.',
        INVALID_CREDENTIALS: 'Epic sadface: Username and password do not match any user in this service'
    }
};

export default Constants;