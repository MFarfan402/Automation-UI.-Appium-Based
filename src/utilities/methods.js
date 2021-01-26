const generalFunctions = require("./general");
const appHandler = require("./handlerEvents");
const { FAILED_ASSERTION, XPATH_STRINGS } = require("../constants/strings");
const assert = require("assert");

const writePassword = async(password, client) => {
    let passwordField = await client.$(XPATH_STRINGS.editText);
    await passwordField.setValue(password);
    await generalFunctions.wait_ms(2000);
}

const writeTelephone = async(user, client) => {
    let field = await client.$(XPATH_STRINGS.editText);

    // Checking if the value is exactly what we want.
    await field.setValue(user);
    assert.strictEqual(await field.getText(), user, FAILED_ASSERTION.wrongText);

    await nextButton(client, "SIGUIENTE");
    await generalFunctions.wait_ms(2000);
}

const nextButton = async(client, word) => {
    let button = await client.$(XPATH_STRINGS.nextButton + word + "')]");
    await button.click();
    await generalFunctions.wait_ms(1000);
}

// WARNING: Fragile test. Using coordinates to display an action
const logOut = async(client) => {
    appHandler.touchPerformByCoordinates(client, 92, 137);

    let textView = await client.$(XPATH_STRINGS.textViewLogOutConfig);
    await textView.click();

    textView = await client.$(XPATH_STRINGS.textViewLogOut);
    await textView.click();
}

module.exports = { 
    writeTelephone, 
    writePassword,
    nextButton,
    logOut
};