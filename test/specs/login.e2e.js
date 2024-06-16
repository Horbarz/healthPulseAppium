describe("Login Test Case", () =>{
    beforeEach(async ()=> {
        await $('//*[@content-desc="Skip >>"]').click();
    });

    it('should be able to login successfully', async () => {
        await $('//*[@content-desc="Login"]').click();
        await $('//*[@text="Allow"]').click();
        await $('(//*[@class="android.widget.EditText"])[1]').click();
        await $('(//*[@class="android.widget.EditText"])[1]').setValue("12487")
        await $('(//*[@class="android.widget.EditText"])[2]').click();
        await $('(//*[@class="android.widget.EditText"])[2]').setValue("P@55w0rd524")
        await driver.hideDeviceKeyboard()
        await $('//*[@content-desc="Login"]').click();
    })
})