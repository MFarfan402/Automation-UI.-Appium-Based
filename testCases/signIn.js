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
    DEFAULT_PASSWORD
} = process.env;

let webDriverClient = null;
const setClient = client => {
    webDriverClient = client;
};

const runHappyPath = async() => {
    await methods.writeTelephone(DEFAULT_USER, webDriverClient);
    await methods.writePassword(DEFAULT_PASSWORD, webDriverClient);

    // Check if we are in the correct activity
    let textAssertion = await webDriverClient.$(XPATH_STRINGS.textViewPassword);
    assert.strictEqual(await textAssertion.getText(), VALIDATION_STRINGS.passwordActivity, FAILED_ASSERTION.notCorrectActivty);

    await methods.nextButton(webDriverClient, "SIGUIENTE");
    await methods.nextButton(webDriverClient, "OK");
    await generalFunctions.wait_ms(2000);

    // Check if we are in the correct activity
    let textView = await webDriverClient.$(XPATH_STRINGS.textViewLogIn);
    assert.strictEqual(await textView.getText(), VALIDATION_STRINGS.logInAssertion, FAILED_ASSERTION.notCorrectActivty);
}

const signBadPassword = async (password) => {
    await methods.writePassword(password, webDriverClient);
    await methods.nextButton(webDriverClient, "SIGUIENTE");
    await generalFunctions.wait_ms(1000);    
    let buttonOk = await webDriverClient.$(XPATH_STRINGS.button);
    await buttonOk.click();
    await generalFunctions.wait_ms(1000); 
}

const runWrongCredentials = async () => {
    await methods.writeTelephone(DEFAULT_USER, webDriverClient);

    // Check if we are in the correct activity
    let textAssertion = await webDriverClient.$(XPATH_STRINGS.textViewPassword);
    assert.strictEqual(await textAssertion.getText(), VALIDATION_STRINGS.passwordActivity, FAILED_ASSERTION.notCorrectActivty);

    // TestCases could be random generated. This is an example of use.
    await signBadPassword("");
    await signBadPassword("(90e21?{eg");
    await signBadPassword("1234 5");
}

// WARNING: Fragile test. Using coordinates to display an action
const checkPasswordComponent = async () => {
    await appHandler.touchPerformByCoordinates(webDriverClient, 606, 606);

    // Check if the component is displaying the password.
    let field = await webDriverClient.$(XPATH_STRINGS.editText);
    assert.strictEqual(await field.getText(), "1234 5", FAILED_ASSERTION.notSamePassword);

    await appHandler.touchPerformByCoordinates(webDriverClient, 606, 606);

    // Check if the component is not showing the password.
    field = await webDriverClient.$(XPATH_STRINGS.editText);
    assert.notStrictEqual(await field.getText(), "1234 5", FAILED_ASSERTION.passwordComponent);
    await generalFunctions.wait_ms(1000);
}

const returnMain = async () => {
    let backButton = await webDriverClient.$(XPATH_STRINGS.backButton);
    await backButton.click();
}

const run = async client => {
    setClient(client);
    await runHappyPath();
    await methods.logOut(client);
    await runWrongCredentials();
    await checkPasswordComponent();
    await returnMain();
}

module.exports = { run };