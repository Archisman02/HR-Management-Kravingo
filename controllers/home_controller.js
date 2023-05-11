const resetPasswordMailer = require("../mailers/password_reset_mailer");

module.exports.home = function (req, res) {
  return res.render("home", {
    title: "Change Password",
  });
};

module.exports.resetPassword = function (req, res) {
  console.log("hey");
  resetPasswordMailer.resetPassword();
  return res.send("done");
};
