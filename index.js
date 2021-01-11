const desiredCapabilities = require("./src/constants/desiredCapabilities");
const webdriverio = require("webdriverio");
const appHandler = require("./src/constants/handlerEvents")
const rxjs = require("rxjs");

// const assert = require("assert");

const acceptPermissions = async client => {
    // Coordinates showed above for Huawei Y6 2019 resolution.
    setTimeout(() => { appHandler.touchPerformByCoordinates(client, 535, 848); }, 7000);
    setTimeout(() => { appHandler.touchPerformByCoordinates(client, 535, 848); }, 2000);
}

const debug = () => { console.log("Debug xd"); };

async function main () {

    const click = () => appHandler.touchPerformByCoordinates(client, 535, 848);

    let client = await webdriverio.remote(desiredCapabilities.REAL_DEVICE_OPTIONS);

    rxjs.asyncScheduler.schedule(click, 5000);
    rxjs.asyncScheduler.schedule(click, 5000);

    // setTimeout(() => { appHandler.touchPerformByCoordinates(client, 535, 848); }, 7000);
    // setTimeout(() => { appHandler.touchPerformByCoordinates(client, 535, 848); }, 2000);

    //await acceptPermissions(client);

    //setTimeout(debug, 3000);

    const field = await client.$("android.widget.EditText");
    await field.setValue("1111111111");
};

main();

    // const field = await client.$("android.widget.EditText");
    //const field = await client.findElement("id", "io.appium.android.apis:id/edit2");
    //const field = await client.$("id=io.appium.android.apis:id/edit2");
    //await field.setValue("1111111111");

    // let field = await client.findElementByXPath("//android.widget.LinearLayout[5]/android.widget.EditText");

    // const value = await field.getText();
    // assert.strictEqual(value,"1111111111");

    //await client.deleteSession();