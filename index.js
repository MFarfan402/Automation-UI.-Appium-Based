const desiredCapabilities = require("./src/constants/desiredCapabilities");
const webdriverio = require("webdriverio");
const appHandler = require("./src/constants/handlerEvents");
const {setUpDriver} = require("./src/constants/constants");

// Requiring test cases
const configEnvironment = require("./testCases/configEnvironment");
const signInCases = require("./testCases/signIn");



async function main () {

    
    //const client = await webdriverio.remote(desiredCapabilities.REAL_DEVICE_OPTIONS);

    await setUpDriver();
    await configEnvironment.run();

    await signInCases.runHappyPath();

    
}

main();

