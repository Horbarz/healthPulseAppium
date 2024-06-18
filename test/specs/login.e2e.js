import { productionUsers } from "../../fixtures/users";


describe("Login Test Case", () =>{
    beforeEach(async ()=> {
        await $('//*[@content-desc="Skip >>"]').click();
    });

    it('should be able to login successfully', async () => {
        await $('//*[@content-desc="Login"]').click();
        await $('//*[@text="Allow"]').click();
        await $('(//*[@class="android.widget.EditText"])[1]').click();
        await $('(//*[@class="android.widget.EditText"])[1]').setValue(productionUsers.username)
        await $('(//*[@class="android.widget.EditText"])[2]').click();
        await $('(//*[@class="android.widget.EditText"])[2]').setValue(productionUsers.password)
        // await driver.hideDeviceKeyboard()
        await $('//*[@content-desc="Login"]').click();
    })
})