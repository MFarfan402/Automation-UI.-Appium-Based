const appHandler = require("../src/utilities/handlerEvents");
const generalFunctions = require("../src/utilities/general");
const methods = require("../src/utilities/methods");
const { VALIDATION_STRINGS, XPATH_STRINGS, FAILED_ASSERTION} = require("../src/constants/strings");

const assert = require("assert");

require("dotenv").config({
    path: "../.env",
});

const {
    DEFAULT_USER,
    VERIFICATION_CODE
} = process.env;

let webDriverClient = null;
const setClient = client => {
    webDriverClient = client;
};

const goToActivity = async () => {
    await methods.writeTelephone(DEFAULT_USER, webDriverClient);

    let button = await webDriverClient.$(generalFunctions.XPathQueryTextView("Olvidé mi contraseña"));
    await button.click();
    await generalFunctions.wait_ms(1000);

    // Check if the component has the telephone of the user.
    let field = await webDriverClient.$(XPATH_STRINGS.editText);
    assert.strictEqual(await field.getText(), DEFAULT_USER, FAILED_ASSERTION.notSameUser);

    /* CHECK FUNCTIONALITY OF BACK COMPONENT
    let backButton = await webDriverClient.$(XPATH_STRINGS.backButton);
    await backButton.click();

    // Check functionality of the back component 
    let textAssertion = await webDriverClient.$(XPATH_STRINGS.textViewPassword);
    assert.strictEqual(await textAssertion.getText(), VALIDATION_STRINGS.passwordActivity, FAILED_ASSERTION.notCorrectActivty);

    backButton = await webDriverClient.$(XPATH_STRINGS.backButton);
    await backButton.click();
    */
}

const testForgotPassword = async () => {
    await methods.nextButton(webDriverClient, "SIGUIENTE");
    await generalFunctions.wait_ms(2000);

    let field = await webDriverClient.$(XPATH_STRINGS.editText);
    await field.setValue(VERIFICATION_CODE);

    // Check if appium write it correctly.
    assert.strictEqual(await field.getText(), VERIFICATION_CODE, FAILED_ASSERTION.wrongText);

    await methods.nextButton(webDriverClient, "CONFIRMAR");
    await generalFunctions.wait_ms(2000);

    let passwordField = await webDriverClient.$(generalFunctions.XPathQueryEditText("Escribe mínimo 8 números"));
    await passwordField.setValue("12345678");

    passwordField = await webDriverClient.$(generalFunctions.XPathQueryEditText("Confirma tu contraseña"));
    await passwordField.setValue("12345678");

    await methods.nextButton(webDriverClient, "GUARDAR");
    await generalFunctions.wait_ms(2000);
    
}

const run = async client => {
    setClient(client);
    await goToActivity();
    await testForgotPassword();
    //await methods.logOut(client);
}

module.exports = { run };
