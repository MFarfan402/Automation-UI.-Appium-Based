const desiredCapabilities = require("./src/constants/desiredCapabilities");
const webdriverio = require("webdriverio");
const appHandler = require("./src/constants/handlerEvents")

// const assert = require("assert");

const acceptPermissions = async client => {
    // Coordinates showed above for Huawei Y6 2019 resolution.
    setTimeout(() => { appHandler.touchPerformByCoordinates(client, 535, 848); }, 7000);
    setTimeout(() => { appHandler.touchPerformByCoordinates(client, 535, 848); }, 2000);
}

const debug = () => { console.log("Debug xd"); };

async function main () {


    // Mero bueno // const field = await client.$("android.widget.EditText");
    //const field = await client.findElement("id", "io.appium.android.apis:id/edit2");
    //const field = await client.$("id=io.appium.android.apis:id/edit2");
    //await field.setValue("1111111111");

	let client = await webdriverio.remote(desiredCapabilities.REAL_DEVICE_OPTIONS);
    setTimeout(() => { appHandler.touchPerformByCoordinates(client, 535, 848); }, 7000);
    setTimeout(() => { appHandler.touchPerformByCoordinates(client, 535, 848); }, 2000);

    //await acceptPermissions(client);

	// let field = await client.findElementByXPath("//android.widget.LinearLayout[5]/android.widget.EditText");
	setTimeout(debug, 3000);
	
    const field = await client.$("android.widget.EditText");
    await field.setValue("1111111111");

    // const value = await field.getText();
    // assert.strictEqual(value,"1111111111");
  
    //await client.deleteSession();
};

main();







/**
 * 
 * {
  "platformName": "Android",
  "platformVersion": "9",
  "deviceName": "5DN6R20320008960",
  "app": "C:\\Users\\MFARFAN\\Desktop\\Exodus\\Automation\\Test\\ApiDemos-debug.apk",
  "appPackage": "io.appium.android.apis",
  "appActivity": ".view.TextFields",
  "automationName": "UiAutomator2"
}

{
  "platformName": "Android",
  "platformVersion": "9",
  "deviceName": "5DN6R20320008960",
  "app": "C:\\Users\\MFARFAN\\Desktop\\Exodus\\Automation\\bgo.apk"
  "automationName": "UiAutomator2"
}

-- Características técnicas completas.
-- Marca?

-- Versión del procesador
-- HDD, SDD
-- Vida útil
-- Versión de memoria RAM: DDR4
-- Sistema operativo

-- Precio
-- Revisarla presencialmente?

3314544029 - David Muñoz



 */
