const appHandler = require("../src/constants/handlerEvents");
const methods = require("../src/methods");
const { VALIDATION_STRINGS } = require("../src/constants/strings")
const assert = require("assert");

const runHappyPath = async client => {
    try { 
        await methods.writeCredentials("2222222222", "123456789", client);
        await methods.nextWindow(client);
        appHandler.touchPerformByCoordinates(client, 355, 870);

        await appHandler.wait_ms(2000);

        let textView = await client.$("//android.widget.TextView[contains(@text, '" +
            VALIDATION_STRINGS.logInAssertion + "')]");
    
        assert.strictEqual(await textView.getText(), VALIDATION_STRINGS.logInAssertion);

        await methods.logOut(client);
    } catch (error ){
        console.error(error);
        throw new Error();
    }
    
}


module.exports = {
    runHappyPath

};