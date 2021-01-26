const desiredCapabilities = require("./src/constants/desiredCapabilities");
const webdriverio = require("webdriverio");

// Requiring test cases
const configEnvironment = require("./testCases/configEnvironment");
const signInCases = require("./testCases/signIn");
const forgotPassword = require("./testCases/forgotPassword");



async function main () {

    let client = await webdriverio.remote(desiredCapabilities.REAL_DEVICE_OPTIONS);

    await configEnvironment.run(client);
    await signInCases.run(client);
    await forgotPassword.run(client);
    
}

main();

