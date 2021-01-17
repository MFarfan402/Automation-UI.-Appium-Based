const appHandler = require("../src/constants/handlerEvents");
const methods = require("../src/methods");
const { WEBDRIVER_CLIENT } = require("../src/constants/constants");


require("dotenv").config({
    path: "../.env",
});

const {
    ADMIN_USER,
    ADMIN_PASSWORD
} = process.env;

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

const run = async() => {
    await acceptAndroidPermissions();
    await methods.writeCredentials(ADMIN_USER, ADMIN_PASSWORD);
    await methods.nextWindow();
    await selectInstance();
    await methods.nextWindow();
}


module.exports = { 
    run
};