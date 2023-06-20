describe.skip('My Login application', () => {
    it.skip('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!')
    })
    it.skip('should not be able to login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!')
    })
})

describe.skip('description test', () => {
    before(() => {
        console.log("runs once before first test 1")
    });

    after(() => {
        console.log("runs once after last test ")
    });
    it('test 1', () => {
        console.log("Execute code: Test 1")
    });
    it('test 2', () => {
        console.log("Execute code: Test 2")
    });
});


