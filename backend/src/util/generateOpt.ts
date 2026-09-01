import sendGridEmail from "./sendGridEmail";
import sendPhoneMessage from "./sendPhoneMessage";

const generateOpt = async ({ user, otp }: any) => {
  console.log(user, otp);
  await sendGridEmail({
    email: user.email,
    cc: [user.email2].toString(),
    subject: "One Time OTP",
    content: `<!doctype html>
          <html lang="en-US">
          
          <head>
              <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
              <title>Otp Verification</title>
              <meta name="description" content="Reset Password Email Template.">
              <style type="text/css">
                  a:hover {text-decoration: underline !important;}
              </style>
          </head>
          
          <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
              <!--100% body table-->
              <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
                  style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
                  <tr>
                      <td>
                          <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                              align="center" cellpadding="0" cellspacing="0">
                              <tr>
                                  <td style="height:80px;">&nbsp;</td>
                              </tr>
                              <tr>
                                  <td style="text-align:center;">
                                    <a  href="/" title="logo" target="_blank">
                                      <img width="100" src="https://pulseplaydigital.com/_next/image?url=https%3A%2F%2Fassets.pulseplaydigital.com%2Fassert%2FPULSEPLAY_DIGITAL_LOGO.png&w=3840&q=75" title="logo" alt="logo">
                                    </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="height:20px;">&nbsp;</td>
                              </tr>
                              <tr>
                                  <td>
                                      <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                          style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                          <tr>
                                              <td style="height:40px;">&nbsp;</td>
                                          </tr>
                                          <tr>
                                              <td style="padding:0 35px;">
                                                  <h2 style="color:#1e1e2d; font-weight:500; margin:0;font-size:20px;font-family:'Rubik',sans-serif;">Hello,
          Please use the verification code below on the PulsePlay Cms  :</h2>
          <h1>${otp}</h1>
                                                 
                                                  <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                     
          
          If you didn't request this, you can ignore this email or let us know.
          Thanks!
          
                                                      
                                                  </p>
                                                
                                              </td>
                                          </tr>
                                          <tr>
                                              <td style="height:40px;">&nbsp;</td>
                                          </tr>
                                      </table>
                                  </td>
                              <tr>
                                  <td style="height:20px;">&nbsp;</td>
                              </tr>
                              <tr>
                                 
                              </tr>
                              <tr>
                                  <td style="height:80px;">&nbsp;</td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
              <!--/100% body table-->
          </body>
          
          </html>`,
  });

  await sendPhoneMessage({
    to: `91${user.phone}`,
    text: `Hello, Please use the verification code below on the PulsePlay Cms: ${otp} .If you didn't request this, you can ignore this email or let us know. Thanks!`,
  });
};

export default generateOpt;
