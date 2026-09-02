// const { default: gql } = require('graphql-tag');
import sendGridEmail from "../../util/sendGridEmail";
import { TeamMember } from "../../models/teamMember";
import moment from "moment";
import { TagImage } from "../../models/tagImages";
import memoriesEmail from "../../util/htmlTemplate/memoriesEmial";

const { gql } = require("apollo-server");
const cron = require("node-cron");
// const { Parking } = require('../models/Parking');
module.exports = gql`
  scalar Upload

  type Outcomes {
    title: String
    para: String
    id: ID
  }
  type Brand {
    avatar: String
    title: String
    para: String
    url: String
    id: ID
  }
  type seoPages {
    seo: seo
    name: String
    id: ID
  }
  type Query {
    getAllBrandsArch: [Brand]
    getAllBrands: [Brand]
    getAllOutComes: [Outcomes]
    seoPages(name: String): seoPages
    getServicesBySlug(slug: String): Services
    getAllClientsHomePage: [Client]
    getServicesWork(id: ID!): [Client]
    getSolutionsWork(id: ID!): [Client]
  }

  type Mutation {
    addOutcomes(title: String, para: String): Outcomes
    editOutcomes(title: String, para: String, id: ID): Outcomes
    deleteOutcomes(id: String): Outcomes

    addBrands(avatar: String, title: String, para: String, url: String): Brand

    editBrands(
      avatar: String
      title: String
      para: String
      url: String
      id: ID
    ): Brand
    editBrandsArch(title: String, id: ID, url: String): Brand

    addBrandsArch(title: String, url: String): Brand
    deleteBrands(id: ID): Brand

    manageSeo(
      id: ID
      keyword: String
      category: String
      metaDescription: String
      metaTitle: String
    ): Brand

    sendEmail(id: ID, message: String, subject: String): Brand
  }
`;

const hrEmail = "hr@pulseplaydigital.com";

cron.schedule("10 00 * * *", async () => {
  const find = await TeamMember.find({ status: true });

  try {
    find.forEach((t: any) => {
      console.log(moment(t.memberDOB).format("MM/DD"), t.memberName);
      if (moment(t.memberDOB).format("MM/DD") === moment().format("MM/DD")) {
        const map = find.map((t: any) => t.email);
        const map1 = find.map((t: any) => t.memberPersonalEmail);

        console.log([...map, ...map1]);

        sendGridEmail({
          email: `${t.memberPersonalEmail} ,${t.email} , ${hrEmail} `,
          cc: [...map, ...map1].toString(),
          subject: `Happy Birthday ${t.memberName}`,
          content: `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">

      @media screen {

      @font-face{
      	font-family:'Poppins';
      	font-style:normal;
      	font-weight:400;
      	src:local('Poppins'), local('Poppins'), url('https://res.cloudinary.com/dhkcpbx2w/raw/upload/v1614216802/Poppins-Regular_arhhqa.woff') format('woff');
      }

      @font-face{
      	font-family:'Poppins';
      	font-style:normal;
      	font-weight:600;
      	src:local('Poppins'), local('Poppins'), url('https://res.cloudinary.com/dhkcpbx2w/raw/upload/v1614216769/Poppins-SemiBold_q15imz.woff') format('woff');
      }

      }

      /* CLIENT-SPECIFIC STYLES */
      body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { -ms-interpolation-mode: bicubic; }

      /* RESET STYLES */
      img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
      table { border-collapse: collapse !important; }
      body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }

      /* iOS BLUE LINKS */
      a[x-apple-data-detectors] {
          color: inherit !important; 
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
      }

      a:hover {
          color:#000001 !important;
      }

      a.button:hover {
      	color:#fff !important;
          background-color:#000001 !important;
          border-color:#000001 !important;
      }

      .hide-on-wide {
          display:none !important;
      }

      /* What it does: Prevents Gmail from changing the text color in conversation threads. */
      .im {
          color: inherit !important;
      }

      /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
      .a6S {
         display: none !important;
         opacity: 0.01 !important;
      }
      /* If the above doesn't work, add a .g-img class to any image in question. */
      img.g-img + div {
         display: none !important;
      }

      /* MOBILE STYLES */
      @media screen and (max-width: 600px) {
        .img-max {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
        }

        .max-width {
          max-width: 100% !important;
        }

        .mobile-wrapper {
          width: 85% !important;
          max-width: 85% !important;
        }

        .mobile-padding {
          padding-left: 5% !important;
          padding-right: 5% !important;
        }
        /* What it does: Remove on a mobile. */
        .hide-on-narrow {
          display:none !important;
        }

        /* What it does: Show on a mobile. */
        .hide-on-wide {
          display:block !important;
        }
      }

      /* ANDROID CENTER FIX */
      div[style*="margin: 16px 0;"] { margin: 0 !important; }
    </style>
  </head>

  <!-- Body : BEGIN -->
  <body
    style="
      margin: 0 !important;
      padding: 0 !important;
      background-color: #f4f6fc;
    "
    bgcolor="#F4F6FC"
  >
    <!-- Preheader Text : BEGIN -->
    <div
      class="litmus-builder-preview-text"
      style="
        display: none;
        font-size: 1px;
        color: #333333;
        line-height: 1px;
        max-height: 0px;
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
      "
    >
      Happy Birthday from PulsePlay Digital &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
    </div>
    <!-- Preheader Text : END -->

    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
    >
      <!-- Logo Header : BEGIN -->
      <tr>
        <td
          align="center"
          valign="top"
          width="100%"
          bgcolor="#F4F6FC"
          style="padding: 35px 15px 0 15px; background-color: #f4f6fc"
          class="mobile-padding"
        >
          <!--[if (gte mso 9)|(IE)]>
            <table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
          <table
            role="presentation"
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <tr>
              <td align="center" valign="top" style="padding: 0 0 35px 0">
                <img
                  src="https://pulseplaydigital.com/_next/image?url=https%3A%2F%2Fassets.pulseplaydigital.com%2Fassert%2FPULSEPLAY_DIGITAL_LOGO.png&w=3840&q=75"
                  alt="pulseplaydigital"
                  width="150"
                  border="0"
                  style="display: block; height: auto"
                  class="g-img"
                />
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
      </tr>
      <!-- Logo Header : END -->

      <!-- Banner Header : BEGIN -->
      <tr>
        <td
          align="center"
          valign="top"
          width="100%"
          bgcolor="#F4F6FC"
          style="padding: 0 15px 0 15px; background-color: #f4f6fc"
          class="mobile-padding"
        >
          <!--[if (gte mso 9)|(IE)]>
            <table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
          <table
            role="presentation"
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <tr>
              <td
                align="center"
                bgcolor="#ffffff"
                style="border-radius: 8px 8px 0 0"
              >
                <img
                  src="https://res.cloudinary.com/dhkcpbx2w/image/upload/v1631639119/Banners/Holidays/birthday-1.jpg"
                  width="600"
                  height="300"
                  alt="Happy Birthday"
                  style="
                    display: block;
                    border-radius: 8px 8px 0 0;
                    width: 100%;
                    max-width: 600px;
                    height: auto;
                  "
                  class="g-img"
                />
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
      </tr>
      <!-- Banner Header : END -->

      <!-- Content with Button : BEGIN -->
      <tr>
        <td
          align="center"
          height="100%"
          valign="top"
          width="100%"
          bgcolor="#F4F6FC"
          style="padding: 0 16px 24px; background-color: #f4f6fc"
          class="mobile-padding"
        >
          <!--[if (gte mso 9)|(IE)]>
            <table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
          <table
            role="presentation"
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="
              border-radius: 0 0 8px 8px;
              max-width: 600px;
              background-color: #fff;
            "
          >
            <tr>
              <td
                align="center"
                valign="top"
                style="padding: 0; font-family: 'Poppins', arial, sans-serif"
              >
                <table
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  width="100%"
                >
                  <tr>
                    <td
                      align="center"
                      bgcolor="#ffffff"
                      style="
                        border-radius: 0 0 8px 8px;
                        padding: 30px 40px 40px;
                        background-color: #fff;
                      "
                    >
                      <table
                        role="presentation"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        width="100%"
                      >
                        <td
                          align="center"
                          valign="top"
                          style="padding: 0 0 35px 0"
                        >
                          <img
                            src=${process.env.IMG + t.memberCover}
                            alt=${t.memberCover}
                            width="150"
                            height="150"
                            border="0"
                            style="
                              display: block;

                              object-fit: contain;
                            
                            "
                            class="g-img"
                          />
                        </td>
                        <!-- Email Content : BEGIN -->
                        <tr>
                          <td
                            align="center"
                            style="
                              font-family: 'Poppins', arial, sans-serif;
                              font-weight: 400;
                            "
                          >
                            <h1
                              style="
                                padding: 0;
                                margin: 0;
                                font-size: 28px;
                                font-family: 'Poppins', arial, sans-serif;
                                line-height: 30px;
                                color: #010101;
                                font-weight: 600;
                              "
                            >
                              It’s Your Birthday!
                            </h1>
                            <p
                              style="
                                margin: 24px 0 0 0;
                                padding: 0;
                                font-size: 15px;
                                font-family: 'Poppins', arial, sans-serif;
                                font-weight: 400;
                                line-height: 24px;
                                text-align: left;
                                color: #616e77;
                              "
                            >
                              Wishing you all the best on your birthday,
                              ${t.memberName}! Thank you for being part of the
                              PulsePlay Digital family.
                            </p>

                            <p
                              style="
                                margin: 24px 0 0 0;
                                padding: 0;
                                font-size: 15px;
                                font-family: 'Poppins', arial, sans-serif;
                                font-weight: 400;
                                line-height: 24px;
                                text-align: left;
                                color: #616e77;
                              "
                            >
                              <strong
                                style="
                                  font-family: 'Poppins', arial, sans-serif;
                                  font-weight: 600;
                                "
                                >Sincerely,<br />Your PulsePlay Digital
                                Team</strong
                              >
                            </p>
                          </td>
                        </tr>
                        <!-- Email Content : END -->

                        <!-- Email Button : BEGIN -->

                        <!-- Login Info : END -->
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
      </tr>
      <!-- Content with Button : END -->

      <!-- Redeem Instructions : BEGIN -->

      <!-- Redeem Instructions : END -->

      <!-- Footer : BEGIN -->

      <!-- Footer : END -->
    </table>
    <!-- Body : END -->
  </body>
</html>
`,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

cron.schedule("01 00 * * *", async () => {
  const find = await TeamMember.find({ status: true });

  try {
    find.forEach(async (t: any) => {
      console.log(moment(t.memberDateOfJoinnng).format("MM/DD"), t.memberName);
      if (
        moment(t.memberDateOfJoinnng).format("MM/DD") ===
        moment().format("MM/DD")
      ) {
        const map = find.map((t: any) => t.email);
        const map1 = find.map((t: any) => t.memberPersonalEmail);

        var firstDate = moment(t.memberDateOfJoinnng, "YYYY-MM-DD"); //Create date using string-format constructor
        var secondDate = moment(new Date(), "YYYY-MM-DD");
        var duration = moment.duration(secondDate.diff(firstDate));
        var years = duration.asYears();
        var durations = Math.round(years);
        var year = durations === 1 ? "year" : "years";

        sendGridEmail({
          email: `${t.memberPersonalEmail} ,${t.email} ,  ${hrEmail} `,
          cc: [...map, ...map1].toString(),
          subject: `Celebrating ${t.memberName} ${durations} ${year} Work Anniversary`,
          content: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">

      @media screen {

      @font-face{
      	font-family:'Poppins';
      	font-style:normal;
      	font-weight:400;
      	src:local('Poppins'), local('Poppins'), url('https://res.cloudinary.com/dhkcpbx2w/raw/upload/v1614216802/Poppins-Regular_arhhqa.woff') format('woff');
      }

      @font-face{
      	font-family:'Poppins';
      	font-style:normal;
      	font-weight:600;
      	src:local('Poppins'), local('Poppins'), url('https://res.cloudinary.com/dhkcpbx2w/raw/upload/v1614216769/Poppins-SemiBold_q15imz.woff') format('woff');
      }

      }

      /* CLIENT-SPECIFIC STYLES */
      body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { -ms-interpolation-mode: bicubic; }

      /* RESET STYLES */
      img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
      table { border-collapse: collapse !important; }
      body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }

      /* iOS BLUE LINKS */
      a[x-apple-data-detectors] {
          color: inherit !important; 
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
      }

      a:hover {
          color:#000001 !important;
      }

      a.button:hover {
      	color:#fff !important;
          background-color:#000001 !important;
          border-color:#000001 !important;
      }

      .hide-on-wide {
          display:none !important;
      }

      /* What it does: Prevents Gmail from changing the text color in conversation threads. */
      .im {
          color: inherit !important;
      }

      /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
      .a6S {
         display: none !important;
         opacity: 0.01 !important;
      }
      /* If the above doesn't work, add a .g-img class to any image in question. */
      img.g-img + div {
         display: none !important;
      }

      /* MOBILE STYLES */
      @media screen and (max-width: 600px) {
        .img-max {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
        }

        .max-width {
          max-width: 100% !important;
        }

        .mobile-wrapper {
          width: 85% !important;
          max-width: 85% !important;
        }

        .mobile-padding {
          padding-left: 5% !important;
          padding-right: 5% !important;
        }
        /* What it does: Remove on a mobile. */
        .hide-on-narrow {
          display:none !important;
        }

        /* What it does: Show on a mobile. */
        .hide-on-wide {
          display:block !important;
        }
      }

      /* ANDROID CENTER FIX */
      div[style*="margin: 16px 0;"] { margin: 0 !important; }
    </style>
  </head>

  <!-- Body : BEGIN -->
  <body
    style="
      margin: 0 !important;
      padding: 0 !important;
      background-color: #f4f6fc;
    "
    bgcolor="#F4F6FC"
  >
    <!-- Preheader Text : BEGIN -->
    <div
      class="litmus-builder-preview-text"
      style="
        display: none;
        font-size: 1px;
        color: #333333;
        line-height: 1px;
        max-height: 0px;
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
      "
    >
      Happy Birthday from PulsePlay Digital &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
      &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
    </div>
    <!-- Preheader Text : END -->

    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
    >
      <!-- Logo Header : BEGIN -->
      <tr>
        <td
          align="center"
          valign="top"
          width="100%"
          bgcolor="#F4F6FC"
          style="padding: 35px 15px 0 15px; background-color: #f4f6fc"
          class="mobile-padding"
        >
          <!--[if (gte mso 9)|(IE)]>
            <table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
          <table
            role="presentation"
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <tr>
              <td align="center" valign="top" style="padding: 0 0 35px 0">
                <img
                  src="https://pulseplaydigital.com/_next/image?url=https%3A%2F%2Fassets.pulseplaydigital.com%2Fassert%2FPULSEPLAY_DIGITAL_LOGO.png&w=3840&q=75"
                  alt="pulseplaydigital"
                  width="150"
                  border="0"
                  style="display: block; height: auto"
                  class="g-img"
                />
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
      </tr>
      <!-- Logo Header : END -->

      <!-- Banner Header : BEGIN -->
      <tr>
        <td
          align="center"
          valign="top"
          width="100%"
          bgcolor="#F4F6FC"
          style="padding: 0 15px 0 15px; background-color: #f4f6fc"
          class="mobile-padding"
        >
          <!--[if (gte mso 9)|(IE)]>
            <table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
          <table
            role="presentation"
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <tr>
              <td
                align="center"
                bgcolor="#ffffff"
                style="border-radius: 8px 8px 0 0"
              >
                <img
                  src="https://res.cloudinary.com/dhkcpbx2w/image/upload/v1631639119/Banners/Holidays/birthday-1.jpg"
                  width="600"
                  height="300"
                  alt="Happy Birthday"
                  style="
                    display: block;
                    border-radius: 8px 8px 0 0;
                    width: 100%;
                    max-width: 600px;
                    height: auto;
                  "
                  class="g-img"
                />
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
      </tr>
      <!-- Banner Header : END -->

      <!-- Content with Button : BEGIN -->
      <tr>
        <td
          align="center"
          height="100%"
          valign="top"
          width="100%"
          bgcolor="#F4F6FC"
          style="padding: 0 16px 24px; background-color: #f4f6fc"
          class="mobile-padding"
        >
       
            <table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="600">
               
            <tr>
            <td align="center" valign="top" width="600">
         
          <table
            role="presentation"
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="
              border-radius: 0 0 8px 8px;
              max-width: 600px;
              background-color: #fff;
            "
          >
            <tr>
              <td
                align="center"
                valign="top"
                style="padding: 0; font-family: 'Poppins', arial, sans-serif"
              >
                <table
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  width="100%"
                >
                  <tr>
                    <td
                      align="center"
                      bgcolor="#ffffff"
                      style="
                        border-radius: 0 0 8px 8px;
                        padding: 30px 40px 40px;
                        background-color: #fff;
                      "
                    >
                      <table
                        role="presentation"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        width="100%"
                      >

                       <td
                          align="center"
                          valign="top"
                          style="padding: 0 0 35px 0"
                        >
                          <img
                            src=${process.env.IMG + t.memberCover}
                            alt=${t.memberCover}
                            width="150"
                            height="150"
                            border="0"
                            style="
                              display: block;

                              object-fit: contain;
                              border-radius: 50%;
                            "
                            class="g-img"
                          />
                        </td>
                        <!-- Email Content : BEGIN -->
                        <tr>
                          <td
                            align="center"
                            style="
                              font-family: 'Poppins', arial, sans-serif;
                              font-weight: 400;
                            "
                          >
                            <h1
                              style="
                                padding: 0;
                                margin: 0;
                                font-size: 28px;
                                font-family: 'Poppins', arial, sans-serif;
                                line-height: 30px;
                                color: #010101;
                                font-weight: 600;
                              "
                            >
                              Celebrating ${t.memberName} ${durations} ${year}
                              Work Anniversary🥂
                            </h1>
                            <p
                              style="
                                margin: 24px 0 0 0;
                                padding: 0;
                                font-size: 15px;
                                font-family: 'Poppins', arial, sans-serif;
                                font-weight: 400;
                                line-height: 24px;
                                text-align: left;
                                color: #616e77;
                              "
                            >
                              Congratulations! You’ve been with the PulsePlay
                              Digital for ${durations} ${year} this month. You
                              have made a significant contribution to our
                              department’s success during your time with us.
                            </p>

                            <p
                              style="
                                margin: 24px 0 0 0;
                                padding: 0;
                                font-size: 15px;
                                font-family: 'Poppins', arial, sans-serif;
                                font-weight: 400;
                                line-height: 24px;
                                text-align: left;
                                color: #616e77;
                              "
                            >
                              <strong
                                style="
                                  font-family: 'Poppins', arial, sans-serif;
                                  font-weight: 600;
                                "
                                >Sincerely,<br />Your PulsePlay Digital
                                Team</strong
                              >
                            </p>
                          </td>
                        </tr>
                        <!-- Email Content : END -->

                        <!-- Email Button : BEGIN -->

                        <!-- Login Info : END -->
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </td>
      </tr>
      <!-- Content with Button : END -->

      <!-- Redeem Instructions : BEGIN -->

      <!-- Redeem Instructions : END -->

      <!-- Footer : BEGIN -->

      <!-- Footer : END -->
    </table>
    <!-- Body : END -->
  </body>
</html>
`,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});
const accountSid = process.env.TWILIO_ACCOUNT_SID || "";
const authToken = process.env.TWILIO_AUTH_TOKEN || "";

const client = (accountSid && authToken) ? require("twilio")(accountSid, authToken) : null;

//@tag-image emailer

cron.schedule("10 18 * * *", async () => {
  try {
    const find = await TagImage.find({})
      .populate({
        path: "member",
        populate: {
          path: "tag",
        },
      })
      .populate({
        path: "user",
        populate: {
          path: "member",
        },
      });

    let dateObj = new Date();
    var dtm = dateObj.getMonth();
    var dtd = dateObj.getDate();
    var dty = dateObj.getFullYear();
    const currentDate = dtm + "/" + dtd;
    find.forEach((element: any) => {
      var dt = new Date(element.createdAt);

      var dtm = dt.getMonth();
      var dtd = dt.getDate();
      var year = dt.getFullYear();
      const createdAt = dtm + "/" + dtd;

      // console.log(currentDate, createdAt);
      if (createdAt === currentDate) {
        var a = moment([dty, 9]);
        var b = moment([year, 0]);
        const data = a.diff(b, "years");

        memoriesEmail({ tags: element, year: data });
      }
    });
  } catch (error) {
    console.log(error);
  }
});
