const generalFunctions = require("../src/utilities/general");
const methods = require("../src/utilities/methods");
const { XPATH_STRINGS } = require("../src/constants/strings");


require("dotenv").config({
    path: "../.env",
});

const {
    ADMIN_USER,
    ADMIN_PASSWORD
} = process.env;

let webDriverClient = null;
const setClient = client => {
    webDriverClient = client;
};

const acceptAndroidPermissions = async() => {
    try {
        await generalFunctions.wait_ms(2000);
        let buttonAllowCamara = await webDriverClient.$(XPATH_STRINGS.acceptButton);
        await buttonAllowCamara.click();
        await generalFunctions.wait_ms(2000);
        
        let buttonAllowLocation = await webDriverClient.$(XPATH_STRINGS.acceptButton);
        await buttonAllowLocation.click();
        await generalFunctions.wait_ms(2000);
    } catch (error) {
        console.error(error);
    }
}

const selectInstance = async() => {
    let field = await webDriverClient.$(XPATH_STRINGS.textViewInstance);
    await field.click();
    await generalFunctions.wait_ms(1000);
}

const run = async client => {
    setClient(client);
    await acceptAndroidPermissions();
    await methods.writeTelephone(ADMIN_USER, client);
    await methods.writePassword(ADMIN_PASSWORD, client);
    await methods.nextButton(client, "SIGUIENTE");
    await selectInstance();
    await methods.nextButton(client, "GUARDAR");
}


module.exports = { run };