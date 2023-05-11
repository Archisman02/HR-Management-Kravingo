const nodeMailer = require("../config/nodemailer");

exports.resetPassword = () => {
  console.log("Inside mailer");
  //   let htmlString = nodeMailer.renderTemplate(
  //     {
  //       token: token,
  //     },
  //     "/password/reset_password.ejs"
  //   );

  nodeMailer.transporter.sendMail(
    {
      from: "",
      to: "",
      subject: "Change Password",
      html: "<h1>Change your password?</h1>",
    },
    (err, info) => {
      if (err) {
        console.log("Error in sending mail", err);
        return;
      }

      console.log("Message sent", info);
      return;
    }
  );
};
