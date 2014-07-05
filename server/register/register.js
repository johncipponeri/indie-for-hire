// Strips whitespace
var trimInput = function (input) {
  return input.trim();
}

// Check for at least 2 names (TODO: Check name lengths)
var isValidName = function (name) {
  return (name.split(' ').length >= 1);
}

// Checks email against regex (TODO)
var isValidEmail = function (email) {
  return true; // Regex for valid email
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
