const VALIDATION_STRINGS = {
    logInAssertion: "¡Conéctate ya!",
    passwordActivity: "Ingresa tu contraseña:",
};

const TEXT_ASSERTION_ACTIVITY = {
    mainActivity: "¡Bienvenido!",
    passwordActivity: "Ingresa tu contraseña:",
    instanceActivity: "Pruebas",
    forgotPasswordActivity: "Confirma tu número de teléfono:",
    verificationCodeActivity: "Ingresa tu código de verificación:",
    changePasswordActivity: "Registra una nueva contraseña:"

};

const TEXT_ASSERTION_ALERTS = {
    // phoneActivity
    notProvidingPhone: "Por favor ingresa tu número de telefono",
    phoneLenghtIncorrect: "Por favor ingresa tu número de celular a 10 digitos",
    inputPhoneAlphanumeric: "Por favor ingresa solo numeros",

    // passwordActivity
    notProvidingPassword: "Por favor, ingresa una contraseña",
    badPassword: "Lo sentimos, tu contraseña no es correcta",

    //verificationCodeActivity
    notProvidingVerificationCode: "Por favor, ingresa un código de confirmación válido",
    incorrectCode: "¡Lo sentimos, el código es incorrecto, por favor inténtalo nuevamente!",

    // changePasswordActivity
    notSamePasswords: "Por favor verifica que las dos contraseñas coincidan",
    incorrectLenght: "Por favor ingresa una contrasena de 8 números mínimo",
    inputPasswordAlphanumeric: "Por favor ingresa solo numeros",

}

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
    acceptButtonAndroid10: "//android.widget.Button[1]",
    backButton:"//android.widget.TextView[contains(@text, '')]",
    
    //XPathQueries - Basic 
    textViewString:"//android.widget.TextView[contains(@text, '",
    editTextString: "//android.widget.EditText[contains(@text, '",
}

module.exports = {
    VALIDATION_STRINGS,
    FAILED_ASSERTION,
    XPATH_STRINGS,
    TEXT_ASSERTION_ALERTS,
    TEXT_ASSERTION_ACTIVITY
};