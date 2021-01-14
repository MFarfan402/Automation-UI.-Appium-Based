const desiredCapabilities = require("./src/constants/desiredCapabilities");
const webdriverio = require("webdriverio");
const appHandler = require("./src/constants/handlerEvents")

// const jasmine = require("jasmine");
// const rxjs = require("rxjs");

// const assert = require("assert");


const acceptAndroidPermissions = async client => {
    try {
        await appHandler.wait_ms(3000);
        appHandler.touchPerformByCoordinates(client, 535, 848);
        await appHandler.wait_ms(3000);
        appHandler.touchPerformByCoordinates(client, 535, 848);
        await appHandler.wait_ms(3000);
    } catch (error) {
        console.error(error);
    }
}

const writeTelephone = async (client, telephone) => {
    try {
        const field = await client.$("android.widget.EditText");
        await field.setValue(telephone);
        appHandler.touchPerformByCoordinates(client, 350, 830);
        await appHandler.wait_ms(3000);
    } catch (error) {
        console.error(error);
    }
}

const nextWindow = async client => {
    try {
        appHandler.touchPerformByCoordinates(client, 360, 740);
        await appHandler.wait_ms(3000);
    } catch (error) {
        console.error(error);
    }
}

const writePassword = async (client, password) => {
    try {
        const field = await client.$("android.widget.EditText");
        await field.setValue(password);
        
    } catch (error) {
        console.error(error);
    }
}

const selectInstance = async client => {
    try {
        await appHandler.wait_ms(3000);
        appHandler.touchPerformByCoordinates(client, 214, 488);
    } catch (error) {
        console.error(error);
    }
}

async function main () {

    let client = await webdriverio.remote(desiredCapabilities.REAL_DEVICE_OPTIONS);

    await acceptAndroidPermissions(client);
    await writeTelephone(client, "1111111111");
    await writePassword(client, "1");
    await nextWindow(client);

    await selectInstance(client);
    await nextWindow(client);

    await writeTelephone(client, "2222222222");
    await writePassword(client, "123456789");
    await nextWindow(client);
}

main();


    // let field = await client.findElementByXPath("//android.widget.LinearLayout[5]/android.widget.EditText");
