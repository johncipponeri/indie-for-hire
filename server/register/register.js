// Strips whitespace
var trimInput = function (input) {
  return input.trim();
}

// Check for at least 2 names
var isValidName = function (name) {
  nameRegex = /^[a-z ,.'-]+$/i;
  return (name.split(' ').length >= 1) && (nameRegex.test(name));
}

// Checks email against regex
var isValidEmail = function (email) {
  var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

// Checks if password length is at least 6 characters
var isValidPassword = function (password) {
  return (password.length >= 6);
}

// Checks if passwords match
var isValidPasswordPair = function (passwordA, passwordB) {
  return (passwordA == passwordB);
}

Meteor.methods({
  createAccount: function (accountInfo) {
    // Trim, Validate, and Decrypt
    if (!isValidName(trimInput(accountInfo.fullName)))
      return false;
    if (!isValidEmail(trimInput(accountInfo.email)))
      return false;
    if (!isValidPassword(trimInput(accountInfo.passw))) // Change when encrytped
      return false;
    if (!isValidPasswordPair(trimInput(accountInfo.passw), trimInput(accountInfo.cpassw))) // Change also
      return false;

    // Create Account
    return Accounts.createUser({
      email    : accountInfo.email,
      password : accountInfo.passw,
      profile  : {
        name: accountInfo.fullName,
      }
    });
  },
});
