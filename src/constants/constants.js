const desiredCapabilities = require("./desiredCapabilities");
const webdriverio = require("webdriverio");

let WEBDRIVER_CLIENT = null;

const setUpDriver = async () => {
    WEBDRIVER_CLIENT = await webdriverio.remote(desiredCapabilities.REAL_DEVICE_OPTIONS);
};

module.exports = {setUpDriver};
exports.WEBDRIVER_CLIENT = WEBDRIVER_CLIENT;
