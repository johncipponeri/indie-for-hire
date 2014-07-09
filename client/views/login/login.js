Template._loginFormModalBody.rendered = function () {
  $("#loginForm").bootstrapValidator({
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "glyphicon glyphicon-remove",
      validating: "glyphicon glyphicon-refresh"
    },
    live: "enabled",
    submitHandler: function (validator, form, submitButton) {
      if (validator.isValid()) {
        $("#loginFormModal").modal("hide");

        var email = $("#login-email").val(),
            passw = $("#login-password").val();

        Meteor.loginWithPassword(email, passw, function (err) {
          if (err)
            console.log("Login Error: " + err); // Tell them something went wrong
          else
            console.log("Login Success: " + email);
        });
      }
    },
    fields: {
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
          }
        }
      }
    }
  });
}

Template._loginFormModalBody.events({
  "click #login-register" : function (e, t) {
    e.preventDefault();

    $("#loginFormModal").modal("hide");
  }
});
