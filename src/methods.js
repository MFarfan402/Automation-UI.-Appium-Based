const appHandler = require("../src/constants/handlerEvents");
const {WEBDRIVER_CLIENT} = require("../src/constants/constants");
const assert = require("assert");

const writeCredentials = async(user, password) => {
    try {
        let field = await WEBDRIVER_CLIENT.$("android.widget.EditText");
        await field.setValue(user);
        assert.strictEqual(await field.getText(), user, "Appium not writting correctly in the field");

        appHandler.touchPerformByCoordinates(WEBDRIVER_CLIENT, 350, 830);
        await appHandler.wait_ms(3000);

        let passwordField = await WEBDRIVER_CLIENT.$("android.widget.EditText");
        await passwordField.setValue(password);
        await appHandler.wait_ms(3000);

    } catch (error) {
        console.error(error);
        throw new Error();
    }
}

const nextWindow = async() => {
    try {
        appHandler.touchPerformByCoordinates(WEBDRIVER_CLIENT, 360, 740);
        await appHandler.wait_ms(3000);
    } catch (error) {
        console.error(error);
    }
}

module.exports = { 
    writeCredentials, 
    nextWindow 
};