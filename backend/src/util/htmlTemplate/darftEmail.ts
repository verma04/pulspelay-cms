import moment from "moment";
import sendGridEmail from "../sendGridEmail";
import { TeamMember } from "../../models/teamMember";

const draftEmail = async ({ blog }: any) => {
  const author =
    blog.author.length === 1
      ? `${blog.author[0].member.memberName}`
      : `${blog.author
          .map((set: any) => set.member.memberName)
          .join(", ")
          .replace(/,(?!.*,)/gim, " and")}`;

  const authorEmail = blog.author.map((t: any) => t.member.email);
  const authorMemberPersonalEmail = blog.author.map(
    (t: any) => t.member.memberPersonalEmail
  );

  const emailSent = `

 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<html lang="en">

  <head data-id="__react-email-head"></head>
  <div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">PulsePlay Digital Blog<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>
  </div>

  <body data-id="__react-email-body" style="background-color:#f6f8fc;font-family: Verdana, sans-serif;"  font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" width="100%" data-id="__react-email-container" role="presentation" cellSpacing="0" cellPadding="0" border="0" style="max-width:40rem;margin:30px auto; padding:40px; width:40rem;background-color:#fff;border-radius:5px;overflow:hidden">
      <tbody>
        <tr style="width:100%">
          <td>
            <table align="center" width="100%" data-id="react-email-section" border="0" cellPadding="0" cellSpacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                  <td data-id="__react-email-column"><img data-id="react-email-img" alt="PulsePlay Logo" src="https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/PULSEPLAY_DIGITAL_LOGO.png" width="150" height="50" style="display:block;outline:none;border:none;text-decoration:none;padding:0 40px;padding-top:10px" /></td>
          </td>
        </tr>
      </tbody>
    </table>
    <table align="center" width="100%" data-id="react-email-section" style="padding:0 40px" border="0" cellPadding="0" cellSpacing="0" role="presentation">
      <tbody>
        <tr>
          <td>
            <hr data-id="react-email-hr" style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e8eaed;margin:20px 0" />
            <p data-id="react-email-text" style="font-size:14px;line-height:26px;margin:16px 0;font-weight:700;color:#004dcf">BLOG UPDATE</p>
            <p data-id="react-email-text" style="font-size:14px;line-height:22px;margin:16px 0;color:#3c4043">Hello ${author},</p>
            <p data-id="react-email-text" style="font-size:14px;line-height:22px;margin:16px 0;color:#3c4043">I hope this email finds you well. Thank you for submitting your blog. Your blog has been saved in draft. Please reach out to your manager or CMS admin to initiate the publishing process for your blog.</p>
          </td>
        </tr>
      </tbody>
    </table>
    

 
    <table align="center" width="100%" data-id="react-email-section" style="padding:0 40px" border="0" cellPadding="0" cellSpacing="0" role="presentation">
      <tbody>
        <tr>
          <td>
            <p data-id="react-email-text" style="font-size:14px;color:#3c4043">Thank you,</p>
            <p data-id="react-email-text" style="font-size:14px;color:#3c4043">PulsePlay Digital</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table align="center" width="100%" data-id="react-email-section" style="background-color:#f0fcff;width:90%;border-radius:5px;overflow:hidden;padding-left:20px" border="0" cellPadding="0" cellSpacing="0" role="presentation">
      <tbody>
        <tr>
          <td>
            <p data-id="react-email-text" style="font-size:14px;line-height:22px;margin:16px 0;color:#3c4043">Connect with us</p>
            <table align="left" width="100%" data-id="react-email-row" style="width:84px;float:left" role="presentation" cellSpacing="0" cellPadding="0" border="0">
              <tbody style="width:100%">
                <tr style="width:100%">
                  <td data-id="__react-email-column" style="padding-right:4px"><a href="https://www.instagram.com/pulseplaydigital/" data-id="react-email-link" target="_blank" style="color:#067df7;text-decoration:none"><img data-id="react-email-img" src="https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/20231130-xtyzq-instagram" width="28" height="28" style="display:block;outline:none;border:none;text-decoration:none;padding:5px" /></a></td>
                  <td data-id="__react-email-column" style="padding-right:4px"><a href="https://www.linkedin.com/company/pulseplaydigital" data-id="react-email-link" target="_blank" style="color:#067df7;text-decoration:none"><img data-id="react-email-img" src="https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/20231130-z9crx-linkedin" width="28" height="28" style="display:block;outline:none;border:none;text-decoration:none;padding:5px" /></a></td>
                  <td data-id="__react-email-column" style="padding-right:4px"><a href="https://twitter.com/PulsePlayD" data-id="react-email-link" target="_blank" style="color:#067df7;text-decoration:none"><img data-id="react-email-img" src="https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/20231130-ea33j-twitter" width="27" height="27" style="display:block;outline:none;border:none;text-decoration:none;padding:5px" /></a></td>
                </tr>
              </tbody>
            </table><img data-id="react-email-img" src="https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/20231130-hs8bn-google-play-footer" width="540" height="48" style="display:block;outline:none;border:none;text-decoration:none" />
          </td>
        </tr>
      </tbody>
    </table>
    <table align="center" width="100%" data-id="react-email-section" style="padding:0 40px;" border="0" cellPadding="0" cellSpacing="0" role="presentation">
      <tbody>
        <tr>
          <td>
            <p data-id="react-email-text" style="font-size:11px;line-height:22px;margin:0;color:#3c4043;text-align:center; margin-top: 30px">© 2024 PulsePlay Digital Private Limited, Dharamshala, Himachal Pradesh 176215</p>
            <p data-id="react-email-text" style="font-size:11px;line-height:22px;margin:0;color:#3c4043;text-align:center">Please do not share your credentials. This is PulsePlay Digital&#x27;s exclusive CMS Admin panel for internal use only. Any unauthorized use will be punishable by law.</p>
          </td>
        </tr>
      </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
  </body>

</html>
`;
  await sendGridEmail({
    from: `PulsePlay Digital DMS <dms.pulseplaydigital@gmail.com>`,
    email: [...authorEmail, ...authorMemberPersonalEmail].toString(),
    subject:
      "Thank you for sharing your blog with us – your submission is greatly appreciated!",
    content: emailSent,
   cc: "hr@pulseplaydigital@gmail.com,deepak.rai@pulseplaydigital.com, ranjeet@pulseplaydigital.com, sharmamca01@gmail.com, deepakrai9@gmail.com, anupdrai@gmail.com , anup@pulseplaydigital.com",
  });
};
export default draftEmail;
