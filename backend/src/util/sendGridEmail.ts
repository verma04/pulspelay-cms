const nodemailer = require("nodemailer");

const sendGridEmail = async ({
  email,
  subject,
  content,
  cc,
  attachments,
}: any) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.resend.com",
      secure: true,
      port: 465,
      auth: {
        user: process.env.RESEND_USER,
        pass: process.env.RESEND_API_KEY,
      },
    });

    const mailOptions: any = {
      from: "PulsePlay Digital <updates@pulseplay-updates.thrico.com>",
      to: email,
      subject: subject,
      html: content,
    };

    if (cc) {
      mailOptions.cc = cc;
    }

    if (attachments) {
      mailOptions.attachments = [
        {
          filename: attachments,
          path: attachments,
          contentType: "application/pdf",
        },
      ];
    }

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendGridEmail;
