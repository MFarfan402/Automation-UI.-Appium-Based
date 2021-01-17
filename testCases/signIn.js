const appHandler = require("../src/constants/handlerEvents");
const methods = require("../src/methods");
const assert = require("assert");

const runHappyPath = async () => {
    await methods.writeCredentials("2222222222", "123456789");
}


module.exports = {
    runHappyPath
};