const appHandler = require("../src/constants/handlerEvents");
const methods = require("../src/methods");


require("dotenv").config({
    path: "../.env",
});

const {
    ADMIN_USER,
    ADMIN_PASSWORD
} = process.env;
let WEBDRIVER_CLIENT = null;

const setClient = client => {
    WEBDRIVER_CLIENT = client;
};

const acceptAndroidPermissions = async() => {
    try {
        await appHandler.wait_ms(3000);
        let buttonAllowCamara = await WEBDRIVER_CLIENT.$("//android.widget.Button[2]");
        await buttonAllowCamara.click();
        await appHandler.wait_ms(3000);
        
        let buttonAllowLocation = await WEBDRIVER_CLIENT.$("//android.widget.Button[2]");
        await buttonAllowLocation.click();
        await appHandler.wait_ms(3000);
    } catch (error) {
        console.error(error);
    }
}

const selectInstance = async() => {
    try {
        await appHandler.wait_ms(3000);
        appHandler.touchPerformByCoordinates(WEBDRIVER_CLIENT, 214, 488);
    } catch (error) {
        console.error(error);
    }
}

const run = async client => {
    setClient(client);
    await acceptAndroidPermissions();
    await methods.writeCredentials(ADMIN_USER, ADMIN_PASSWORD, client);
    await methods.nextWindow(client);
    await selectInstance();
    await methods.nextWindow(client);
}


module.exports = { 
    run
};