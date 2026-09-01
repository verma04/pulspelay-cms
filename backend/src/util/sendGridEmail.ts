const nodemailer = require("nodemailer");

const sendGridEmail = async ({
  email,
  subject,
  content,
  cc,
  attachments,
}: any) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  try {
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.resend.com",
      secure: true,
      port: 465,
      auth: {
        user: process.env.RESEND_USER || "resend",
        pass: process.env.RESEND_API_KEY || "",
      },
    });

    if (attachments) {
      console.log(attachments);
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: "PulsePlay Digital <updates@pulseplaydigital.ai>", // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        // plain text body
        html: content, // html body
        cc: cc,
        attachments: [
          {
            filename: attachments,
            path: attachments,
            contentType: "application/pdf",
          },
        ],
      });
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } else {
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: "PulsePlay Digital <updates@pulseplaydigital.ai>", // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        // plain text body
        html: content, // html body
        cc: cc,
      });
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (error) {
    console.log(error);
  }
};

export default sendGridEmail
