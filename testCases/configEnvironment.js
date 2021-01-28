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

const acceptAndroidPermissions = async(androidVersion) => {
    try {

        await generalFunctions.wait_ms(2000);
        let buttonAllowCamara = (androidVersion == 9) ? 
            await webDriverClient.$(XPATH_STRINGS.acceptButton) : 
            await webDriverClient.$(XPATH_STRINGS.acceptButtonAndroid10);
        await buttonAllowCamara.click();
        await generalFunctions.wait_ms(2000);
        
        let buttonAllowLocation = (androidVersion == 9) ? 
            await webDriverClient.$(XPATH_STRINGS.acceptButton) : 
            await webDriverClient.$(XPATH_STRINGS.acceptButtonAndroid10);
        await buttonAllowLocation.click();
        await generalFunctions.wait_ms(2000);
    } catch (error) {
        console.error(error);
    }
}

const selectInstance = async() => {
    let field = await webDriverClient.$(generalFunctions.XPathQueryTextView("Pruebas"));
    await field.click();
    await generalFunctions.wait_ms(1000);
}

const run = async (client, androidVersion) => {
    setClient(client);
    await acceptAndroidPermissions(androidVersion);
    await methods.writeTelephone(ADMIN_USER, client);
    await methods.writePassword(ADMIN_PASSWORD, client);
    await methods.nextButton(client, "SIGUIENTE");
    await selectInstance();
    await methods.nextButton(client, "GUARDAR");
}


module.exports = { run };