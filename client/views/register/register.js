Template._registerFormModalBody.rendered = function () {
  $("#registerForm").bootstrapValidator({
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "glyphicon glyphicon-remove",
      validating: "glyphicon glyphicon-refresh"
    },
    live: "enabled",
    submitHandler: function (validator, form, submitButton) {
      if (validator.isValid()) {
        Session.set("fullName", $("#register-fullname").val());
        Session.set("email", $("#register-email").val());
        Session.set("passw", $("#register-password").val());

        $("#registerFormModal2").modal("show");
        $("#registerFormModal").modal("hide");
      }
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
