Template.matchMakerForm.events({
  "click #matchButton" : function (e, t) {
    e.preventDefault();

    Session.set("matchType", $("#matchTypeSelection :selected").val().trim());
  }
})

Template._matchModalBody.results = function () {
  return Meteor.users.find({ "profile.primary_skill" : Session.get("matchType") });
};
