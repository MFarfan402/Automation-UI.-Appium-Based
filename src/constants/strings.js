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

// Future implementation: Construct an interface to accept these strings.
const XPATH_STRINGS = {
    editText: "android.widget.EditText",
    button: "android.widget.Button",
    acceptButton: "//android.widget.Button[2]",
    editTextString: "//android.widget.EditText[contains(@text, '",
    nextButton:"//android.widget.TextView[contains(@text, '",
    backButton:"//android.widget.TextView[contains(@text, '')]",
    textViewLogOut: "//android.widget.TextView[contains(@text, 'Cerrar sesión')]",
    textViewLogOutConfig: "//android.widget.TextView[contains(@text, 'Configuración')]",
    textViewInstance: "//android.widget.TextView[contains(@text, 'Pruebas')]",
    textViewForgotPassword: "//android.widget.TextView[contains(@text, 'Olvidé mi contraseña')]",
    textViewLogIn: "//android.widget.TextView[contains(@text, '" + VALIDATION_STRINGS.logInAssertion + "')]",
    textViewPassword: "//android.widget.TextView[contains(@text, '" + VALIDATION_STRINGS.passwordActivity + "')]",
}

module.exports = {
    VALIDATION_STRINGS,
    FAILED_ASSERTION,
    XPATH_STRINGS
};