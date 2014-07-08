Template._registerFormModalBody2.rendered = function () {
  $("#registerForm2").bootstrapValidator({
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "glyphicon glyphicon-remove",
      validating: "glyphicon glyphicon-refresh"
    },
    live: "enabled",
    submitHandler: function (validator, form, submitButton) {
      if (validator.isValid()) {
        // Get info
        var fullName = Session.get("fullName");
            email    = Session.get("email");
            passw    = Session.get("passw");

        var avatar_url    = $("#register-avatar-url").val(),
            primary_skill = $("#register-primary-skill").val(),
            headline      = $("#register-headline").val(),
            bio           = $("#register-bio").val(),
            personal_url  = $("#register-personal-url").val();

        //$("#registerFormModal").modal("hide");

        // Create account
        Meteor.call("createAccount", {
          fullName      : fullName,
          email         : email,
          passw         : passw, // TODO: Encrypt
          avatar_url    : avatar_url,
          primary_skill : primary_skill,
          headline      : headline,
          bio           : bio,
          personal_url  : personal_url
        }, function (error, id) {
          if (error) {
            console.log("Error: " + error);
            return; // Tell them something went wrong
          }

          // Was account created?
          if (!id) {
            console.log("!id");
            return; // Account exists
          }

          // Login
          Meteor.loginWithPassword(email, passw, function (err) {
            if (err)
              console.log("Login Error: " + err); // Tell them something went wrong
            else
              console.log("Login Success: " + email);
          });
        });
      }
    },
    fields: {
      avatarUrl: {
        validators: {
          notEmpty: {
            message: "An avatar url is required!"
          },
        }
      },
      headline: {
        validators: {
          notEmpty: {
            message: "A headline is required!"
          },
        }
      },
      bio: {
        validators: {
          notEmpty: {
            message: "A bio is required!"
          },
          stringLength: {
            max: 1000,
            message: "Your bio must be 1000 characters or less!"
          }
        }
      }
    }
  });
}
