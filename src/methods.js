const appHandler = require("../src/constants/handlerEvents");
const { FAILED_ASSERTION, VALIDATION_STRINGS } = require("../src/constants/strings");
const assert = require("assert");

const writeCredentials = async(user, password, client) => {
    try {
        let field = await client.$("android.widget.EditText");
        await field.setValue(user);
        assert.strictEqual(await field.getText(), user, FAILED_ASSERTION.wrongText);

        appHandler.touchPerformByCoordinates(client, 350, 830);
        await appHandler.wait_ms(3000);

        let passwordField = await client.$("android.widget.EditText");
        await passwordField.setValue(password);
        await appHandler.wait_ms(3000);

    } catch (error) {
        console.error(error);
        throw new Error();
    }
}

const nextWindow = async(client) => {
    try {
        appHandler.touchPerformByCoordinates(client, 360, 740);
        await appHandler.wait_ms(3000);
    } catch (error) {
        console.error(error);
        throw new Error();
    }
}

//5, 785, 350, 785
const logOut = async(client) => {
    try {
        appHandler.touchPerformByCoordinates(client, 92, 137);

        let textView = await client.$("//android.widget.TextView[contains(@text, 'Configuración')]");
        await textView.click();

        textView = await client.$("//android.widget.TextView[contains(@text, 'Cerrar sesión')]");
        await textView.click();

    } catch (error) {
        console.error(error);
        throw new Error();
    }
};

module.exports = { 
    writeCredentials, 
    nextWindow,
    logOut
};