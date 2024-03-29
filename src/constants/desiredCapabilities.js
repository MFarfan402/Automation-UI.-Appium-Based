require("dotenv").config({
    path: "./.env",
});

const {
    APPIUM_HOSTNAME,
    APPIUM_SERVER_PATH,
    APPIUM_SERVER_PORT,
    //APK_PATH,
    BROWSERSTACK_USER,
    BROWSERSTACK_KEY,
} = process.env;

const APK_PATH = "C:\\Users\\MFARFAN\\Desktop\\Exodus\\Automation\\bgo.apk";
//const APK_PATH = "C:\\Users\\admintest\\Desktop\\VersionAppAppium\\bgo.apk";

const REAL_DEVICE_OPTIONS = {
    //hostname: APPIUM_HOSTNAME,
    path: APPIUM_SERVER_PATH,
    port: parseInt(APPIUM_SERVER_PORT),
    capabilities: {
        platformName: "Android",
        platformVersion: "9",
        deviceName: "5DN6R20320008960",
        app: APK_PATH,
        automationName: "UiAutomator2"
    }
};

const EMULATOR_DEVICE_OPTIONS = {
    path: APPIUM_SERVER_PATH,
    port: parseInt(APPIUM_SERVER_PORT),
    capabilities: {
        platformName: "Android",
        platformVersion: "8",
        deviceName: "AutomaticTest",
        app: APK_PATH,
        appPackage: "io.appium.android.apis",
        appActivity: ".view.TextFields"
    }
}

module.exports = {
    REAL_DEVICE_OPTIONS,
    EMULATOR_DEVICE_OPTIONS
};