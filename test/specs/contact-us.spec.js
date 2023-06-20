describe('webdriveruniwersity - contact page', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('/Contact-Us/contactus.html');
    });
    
    it('valid submiision -submit all information',async () => {
        const firstName = await $('//*[@name="first_name"]');  
        const lastName = await $('//*[@name="last_name"]');
        const emailAddress = await $('//*[@name="email"]');
        const message = await $('//*[@name="message"]');
        const submitButton = await $('//input[@value="SUBMIT"]');
        await firstName.setValue("Joe");
        await browser.pause(3000)
        await lastName.setValue("Blogs");
        await browser.pause(3000)
        await emailAddress.setValue("Blogs@mail.com");
        await browser.pause(3000)
        await message.setValue("Hello how are you ?");
        await browser.pause(3000)
        await submitButton.click();

        const successfulSubmissionHeader = await $("#contact_reply > h1");
        await expect(browser).toHaveUrlContaining('Contact-Us');
        await expect(successfulSubmissionHeader).toBeDisplayed();
        await expect(successfulSubmissionHeader).toHaveText('Thank You for your Message!');

        await browser.pause(5000)
    });

    it('valid submiision - dont submit all information', async () => {
        const firstName = await $('//*[@name="first_name"]');  
        const lastName = await $('//*[@name="last_name"]');
        const message = await $('//*[@name="message"]');
        const submitButton = await $('//input[@value="SUBMIT"]');
        await firstName.setValue("Anna");
        await browser.pause(3000)
        await lastName.setValue("Riu");
        await browser.pause(3000)
        await message.setValue("Hello world");
        await browser.pause(3000)
        await submitButton.click();
        await browser.pause(5000)
        const successfulSubmissionHeader = await $('body');
        await expect(successfulSubmissionHeader).toHaveTextContaining(['Error: all fields are required', 'Error: Invalid email address'])
    });
    afterEach('Await', async() => {
        await browser.pause(5000)
    });
});