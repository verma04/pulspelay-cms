import moment from "moment";
import sendGridEmail from "../sendGridEmail";
import { TeamMember } from "../../models/teamMember";
import { TagImage } from "../../models/tagImages";

const tagImageEmail = async ({ id }: any) => {
  const find = await TeamMember.find({ status: true });
  const map = find.map((t: any) => t.email);
  const map1 = find.map((t: any) => t.memberPersonalEmail);

  console.log([...map, ...map1]);
  const tags = await TagImage.findOne({
    _id: id,
  })
    .populate({
      path: "user",
      populate: {
        path: "member",
      },
    })
    .populate({
      path: "member",
      populate: {
        path: "tag",
      },
    });

  const caption = tags.caption;

  const members = tags.member;

  if (members.length > 0) {
    const author = tags?.user?.member?.memberName;
    const img = `https://pulseplaydigital.sgp1.digitaloceanspaces.com${tags.image}`;
    const member =
      members.length === 1
        ? `${members[0].tag?.memberName}`
        : `${members
            .map((set: any) => set?.tag?.memberName)
            .join(", ")
            .replace(/,(?!.*,)/gim, " and")}`;

    const email = `

     <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <html lang="en">

      <head data-id="__react-email-head"></head>
      <div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Discover Our Latest Visual Delight!<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>
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
                <p data-id="react-email-text" style="font-size:14px;line-height:26px;margin:16px 0;font-weight:700;color:#004dcf">UPDATE</p>
                <p data-id="react-email-text" style="font-size:14px;line-height:22px;margin:16px 0;color:#3c4043">Hello PulsePlay Digital Team,</p>
                <p data-id="react-email-text" style="font-size:14px;line-height:22px;margin:16px 0;color:#3c4043">I hope this message finds you well. We're thrilled to share exciting news – ${author} has just added  new image to our website at ${caption}. Notably, ${member} was tagged in this photo, adding an extra layer of significance to the moment</p>
              </td>
            </tr>
          </tbody>
        </table>
        <table align="center" width="100%" data-id="react-email-section" style="padding-left:40px;padding-right:40px;padding-top:40px;" border="0" cellPadding="0" cellSpacing="0" role="presentation">
          <tbody>
            <tr>
              <td>
                <table align="center" width="100%" data-id="react-email-row" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                  <tbody style="width:100%">
                    <tr style="width:100%">
                      <td style="position: relative;" data-id="__react-email-column">

                    
                        <img id="img1" data-id="react-email-img" src=${img} src=${img} width="500px"  style="display:block;outline:none;border:none;text-decoration:none;float:left;object-fit:contain" />
                    </td>

                    </tr>
                  </tbody>
                </table>
                <hr data-id="react-email-hr" style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e8eaed;margin:20px 0" />
              </td>
            </tr>
          </tbody>
        </table>
        <table align="center" width="100%" data-id="react-email-section" style="padding-left:40px" border="0" cellPadding="0" cellSpacing="0" role="presentation">
          <tbody>
            <tr>
              <td>
                <p data-id="react-email-text" style="font-size:14px;line-height:22px;margin:16px 0;color:#3c4043">Additionally, if any team member would like to add a group image, we encourage you to do so. You can easily add your image through our admin panel. Simply log in at admin.pulseplaydigital.com and follow the easy steps to create and submit your content.</p>
              </td>
            </tr>
          </tbody>
        </table>
        <table align="center" width="100%" data-id="react-email-section" style="padding:0 40px" border="0" cellPadding="0" cellSpacing="0" role="presentation">

            <tbody>
            <tr>
              <td>
                <p data-id="react-email-text" style="font-size:14px;line-height:22px;margin:16px 0;color:#3c4043">Thank you for your continued contributions to our digital community. We look forward to  your feedback  and any future posts from our talented team.</p>
                <hr data-id="react-email-hr" style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e8eaed;margin:20px 0" />
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
        <table align="center" width="100%" data-id="react-email-section" style="padding:0 40px;padding-bottom:10px" border="0" cellPadding="0" cellSpacing="0" role="presentation">
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
    const memberEm = await members.map((set: any) => set.tag.email);

    console.log(memberEm);
    await sendGridEmail({
      from: `PulsePlay Digital DMS <dms.pulseplaydigital@gmail.com>`,
      email: [memberEm].toString(),
      cc: [...map, ...map1].toString(),
      subject: "Discover Our Latest Visual Delight!",
      content: email,
      // cc: "hr@pulseplaydigital@gmail.com,deepak.rai@pulseplaydigital.com, ranjeet@pulseplaydigital.com, sharmamca01@gmail.com, deepakrai9@gmail.com, anupdrai@gmail.com , anup@pulseplaydigital.com",
    });
  }
};
export default tagImageEmail;
