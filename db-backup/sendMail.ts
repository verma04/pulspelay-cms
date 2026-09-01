const nodemailer = require("nodemailer");
import moment from "moment";
const sendEmail = async ({ attachments }: any) => {
  console.log(attachments);
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  try {
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      pool: true,

      // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "dms.pulseplaydigital@gmail.com",
        pass: process.env.SMTP_PASS || "",
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "PulsePlay Digital  <dms.pulseplaydigital@gmail.com>", // sender address
      to: "pulseplaydev@gmail.com,pulseplaydigital@gmail.com", // list of receivers
      subject: `PulsePlay Digital Website DataBase Weekly Backup ${moment().format(
        "MMMM Do YYYY, h:mm:ss a"
      )} `, // Subject line
      // plain text body
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<html lang="en">

  <head data-id="__react-email-head"></head>

  <body data-id="__react-email-body" style="background-color:#ffffff;font-family:HelveticaNeue,Helvetica,Arial,sans-serif">
    <table align="center" width="100%" data-id="__react-email-container" role="presentation" cellSpacing="0" cellPadding="0" border="0" style="max-width:37.5em;background-color:#ffffff;border:1px solid #eee;border-radius:5px;box-shadow:0 5px 10px rgba(20,50,70,.2);margin-top:20px;width:500px;margin:0 auto;padding:68px 0 60px">
      <tbody>
        <tr style="width:100%">
          <td><img data-id="react-email-img" alt="Plaid" src="https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/PULSEPLAY_DIGITAL_LOGO.png" width="150" height="50" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" />
            <h1 data-id="react-email-heading" style="color:#000;display:inline-block;font-family:HelveticaNeue-Medium,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;line-height:24px;margin-bottom:0;margin-top:0;text-align:center"></h1>
            <table align="center" width="100%" data-id="react-email-section" style="background:rgba(0,0,0,.05);border-radius:4px;margin:16px auto 14px;vertical-align:middle;width:400px" border="0" cellPadding="0" cellSpacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <p data-id="react-email-text" style="font-size:32px;line-height:40px;margin:0 auto;color:#000;display:inline-block;font-family:HelveticaNeue-Bold;font-weight:700;letter-spacing:6px;padding-bottom:8px;padding-top:8px;width:100%;text-align:center">Weekly DataBase Backup</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p data-id="react-email-text" style="font-size:15px;line-height:23px;margin:0;color:#444;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;letter-spacing:0;padding:0 40px;text-align:center">This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed. If you have received this email in error, please notify the sender immediately and delete the email from your system. Any unauthorized use, disclosure, distribution, or reproduction of this communication is strictly prohibited and may be subject to legal action. The information contained in this email is for internal use only and may contain privileged or confidential information. Unauthorized use of this information is strictly prohibited and may result in legal consequences..</p>
          </td>
        </tr>
      </tbody>
    </table>
    <p data-id="react-email-text" style="font-size:12px;line-height:23px;margin:0;color:#000;font-weight:800;letter-spacing:0;margin-top:20px;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;text-align:center;text-transform:uppercase"></p>
  </body>

</html>`, // html body
      cc: "pankaj.verma.pulseplaydigital@gmail.com,pankaj.verma@pulseplaydigital.com",
      attachments: [
        {
          filename: "DataBase.zip",
          path: attachments,
          contentType: "application/javascript",
        },
      ],
    });
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
