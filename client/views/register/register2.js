Template._registerFormModalBody2.rendered = function () {
  $("#registerForm").bootstrapValidator({
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "glyphicon glyphicon-remove",
      validating: "glyphicon glyphicon-refresh"
    },
    fields: {
      fullName: {
        validators: {
          notEmpty: {
            message: "Your full name is required!"
          },
          stringLength: {
            min: 5,
            message: "Please enter your full name!"
          },
          regexp: {
            regexp: /^[a-z ,.'-]+$/i,
            message: 'Please enter your full name!'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: "An email address is required!"
          },
          emailAddress: {
            message: "Please enter a valid email address!"
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: "A password is required!"
          },
          stringLength: {
            min: 6,
            max: 30,
            message: "Your password must be between 6 and 30 characters!"
          },
          identical: {
            field: "confirmPassword",
            message: "Your passwords don't match!"
          }
        }
      },
      confirmPassword: {
        validators: {
          notEmpty: {
            message: "A password is required!"
          },
          stringLength: {
            min: 6,
            max: 30,
            message: "Your password must be between 6 and 30 characters!"
          },
          identical: {
            field: "password",
            message: "Your passwords don't match!"
          }
        }
      }
    }
  });
}

Template.registerFormModal2.events({
  "click #register-submit" : function (e, t) {
    e.preventDefault();

    // Get info
    var fullName = t.find("#register-fullname").value;
        email    = t.find("#register-email").value;
        passw    = t.find("#register-password").value;
        cpassw   = t.find("#register-confirm-password").value;

    //$("#registerFormModal").modal("hide");

    // Create account
    Meteor.call("createAccount", {
      fullName : fullName,
      email    : email,
      passw    : passw, // TODO: Encrypt
      cpassw   : cpassw,
    }, function (error, id) {
      if (error)
        return; // Tell them something went wrong

      // Was account created?
      if (!id)
        return false; // Account exists

      // Login
      Meteor.loginWithPassword(email, passw, function (err) {
        if (err)
          console.log("Login Error: " + err); // Tell them something went wrong
        else
          console.log("Login Success: " + email);
      });
    });

    return false;
  }
});
