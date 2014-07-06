Template.signIn.events({
  "click #logout" : function (e, t) {
    e.preventDefault();

    Meteor.logout(function (err) {
      // if (err) tell them something went wrong
      return false;
    });

    return false;
  }
});
