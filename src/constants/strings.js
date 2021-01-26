const VALIDATION_STRINGS = {
    logInAssertion: "¡Conéctate ya!",
    passwordActivity: "Ingresa tu contraseña:",
};

const FAILED_ASSERTION = {
    wrongText: "Appium not writting correctly in the field!",
    notSamePassword: "Test failed. Expected password didn't match actual value",
    notSameUser: "Test failed. Expected user didn't match actual value",
    passwordComponent: "Password component is not working properly",
    notCorrectActivty: "Assert made not in the correct activity"
};

const XPATH_STRINGS = {
    // Android Components
    editText: "android.widget.EditText",
    button: "android.widget.Button",

    //XPathQueries
    acceptButton: "//android.widget.Button[2]",
    backButton:"//android.widget.TextView[contains(@text, '')]",
    
    //XPathQueries - Basic 
    textViewString:"//android.widget.TextView[contains(@text, '",
    editTextString: "//android.widget.EditText[contains(@text, '",
}

module.exports = {
    VALIDATION_STRINGS,
    FAILED_ASSERTION,
    XPATH_STRINGS
};