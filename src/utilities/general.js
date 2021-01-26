const { XPATH_STRINGS } = require("../constants/strings");

const wait_ms = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms)
        }, ms)
    })
};

const XPathQueryTextView = (text) => {
    return (XPATH_STRINGS.textViewString + text + "')]");
}

const XPathQueryEditText = (text) => {
    return (XPATH_STRINGS.editTextString + text + "')]");
}

module.exports = {
    wait_ms,
    XPathQueryTextView,
    XPathQueryEditText
};