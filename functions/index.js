const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
admin.initializeApp();

/**
 * Here we're using Gmail to send
 */
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().auth.email,
    pass: functions.config().auth.password,
  },
});

exports.sendMail = functions.region("europe-west1").https.onRequest((req, res) => {
  cors(req, res, () => {
    const dest = functions.config().dest;

    const name = req.query.name;
    const email = req.query.email;
    const motivation = req.query.motivation;

    const mailOptions = {
      from: "ITU LAN Recruitment Agency <kasper@itulan.dk>",
      to: dest,
      subject: `ITU LAN - Crew Application: ${name}`,
      cc: "kasper@itulan.dk",
      html: `
        <p style="font-size: 32px;">CREW APPLICATION</p>
        <br />
        <b>Name:</b><br>
        <span>${name}</span>
        <br><br>
        <b>E-mail address:</b><br>
        <span>${email}</span>
        <br><br>
        <b>Motivation:</b><br>
        <span>${motivation}</span>
        <br><br>
            `,
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Sent!");
    });
  });
});
