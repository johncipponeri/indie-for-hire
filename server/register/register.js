Meteor.methods({
  createAccount: function (accountInfo) {
    // Create Account
    return Accounts.createUser({
      email    : accountInfo.email,
      password : accountInfo.passw,
      profile  : {
        email         : accountInfo.email,
        name          : accountInfo.fullName,
        avatar_url    : accountInfo.avatar_url,
        primary_skill : accountInfo.primary_skill,
        headline      : accountInfo.headline,
        bio           : accountInfo.bio,
        personal_url  : accountInfo.personal_url
      }
    });
  },
});
